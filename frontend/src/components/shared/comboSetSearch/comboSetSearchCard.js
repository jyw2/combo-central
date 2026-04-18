import {
  Card,
  Collapse,
  Divider,
  LinearProgress,
  MenuItem,
  MenuList,
  Pagination,
  PaginationItem,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CharacterContext } from "context/characterContext.js";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import HttpClient from "../../../services/httpClient.js";
import ComboRenderSelectorRow from "../comboRenderSelectorRow.js";
import FreeSearchBar from "../freeSearchBar.js";
import NoQParamsFreeSearchBar from "../noQParamsFreeSearchBar.js";
import ComboSetPreviewCard from "./comboSetPreviewCard.js";


function getNewPageQueryParams(page, queryParamsObj) {
  const newParams = new URLSearchParams(queryParamsObj.toString());
  newParams.delete("charid");
  newParams.delete("userid");
  newParams.set("page", page);

  const newParamsString = newParams.toString();
  return newParamsString ? `?${newParamsString}` : "";
}

export default function ComboSetSearchCard(props) {
  const { charId } = useParams();
  const [comboSets, setComboSets] = useState([]);
  const navigate = useNavigate();
  const { userId, likesOnly, noQParams, onSetClick, isSetDisabled, comboPrefix } = props;
  const characterContext = useContext(CharacterContext);

  const location = useLocation();
  const theme = useTheme();
  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [comboCount, setComboCount] = useState(1);

  const [noQparamsSearchText, setNoQparamsSearchText] = useState("");
  const [noQParamsPage, setNoQParamsPage] = useState(1);

  const hasFilters = () => {
    // if (userId) return true;
    // for (var _ of searchParams.keys()) {
    //   return true;
    // }
    // return false;
    return true
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  function searchNoQParams(search, page = 1) {
    setNoQparamsSearchText(search);
    async function handleSearch() {
      try {
        const comboSetRes = await HttpClient.getComboSets(
          charId,
          page,
          "Date",
          -1,
          userId ?? "",
          search.split(/(\s+)/).map((t) => t.toLowerCase()) ?? [],
          !!likesOnly
        );

        setComboCount(comboSetRes.count);
        setComboSets(comboSetRes.comboSets);
      } catch (e) {
        setError("error occured while searching");
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      handleSearch();
    }, 400);
  }

  function search() {
    async function handleSearch() {
      try {
        if (hasFilters()) {
          const comboSetRes = await HttpClient.getComboSets(
            charId,
            searchParams.get("page") ?? 1,
            searchParams.get("sort") ?? "likes",
            searchParams.get("sortdirection") ?? -1,
            userId ?? "",
            searchParams
              .get("search")
              ?.split(/(\s+)/)
              .map((t) => t.toLowerCase()) ?? [],

            !!likesOnly
          );
          setComboCount(comboSetRes.count);
          setComboSets(comboSetRes.comboSets);
        } else {
          setComboSets([]);
        }
      } catch (e) {
        setError("error occured while searching");
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      handleSearch();
    }, 400);
  }
  useEffect(() => {
    if (!noQParams) search();
  }, [searchParams]);

  useEffect(() => {
    if (noQParams) searchNoQParams("");
  }, []);

  function renderHelp() {
    if (!isLoading && comboSets?.length <= 0) {
      return (
        <Typography sx={{ my: 4 }}>
          {error
            ? error
            : hasFilters() <= 0
              ? "Add some tags to get started"
              : "No combo sets found. Try adjusting the search terms"}
        </Typography>
      );
    }
  }


  return (
    <Card
      sx={{ p: noQParams ? 2 : 3 }}
      style={{
        borderRadius: noQParams ? "0" : "",
        overflow: "visible",
        position: "relative",
        width: "100%", boxSizing: "border-box"
      }}
    >
      {noQParams ? null : (
        <Typography
          style={{
            fontSize: "25px",
            position: "absolute",
            fontWeight: "bold",
            top: "-15px",
            left: "15px",
          }}
        >
          {comboPrefix?.toUpperCase() ?? "SEARCH"}  COMBO SETS
        </Typography>
      )}

      {noQParams ? (
        <NoQParamsFreeSearchBar
          placeholder="tags or keywords, EX: bnb easy"
          disabled={isLoading}
          handleSearch={searchNoQParams}
        ></NoQParamsFreeSearchBar>
      ) : (
        <FreeSearchBar
          placeholder="tags or keywords, EX: bnb easy"
          disabled={isLoading}
        ></FreeSearchBar>
      )}
      <Divider sx={{ my: 1 }} />
      {noQParams ? null :
        <Stack alignItems="start">
          <ComboRenderSelectorRow collapsible={!largeScreenSize} showTags />
        </Stack>
      }

      {isLoading ? <LinearProgress sx={{ my: 2 }} color="secondary" /> : null}

      {renderHelp()}

      <Collapse in={!!(!isLoading && comboSets?.length > 0)}>
        {noQParams ? (
          <MenuList style={{ overflow: "auto", maxHeight: "300px" }}  className="custom-scroll-container" >
            {comboSets?.map((comboSet) => (
              <MenuItem
                onClick={() => {
                  onSetClick(comboSet);
                  searchNoQParams(noQparamsSearchText);
                }}
                disabled={isSetDisabled(comboSet)}
                key={comboSet._id}
              >
                <Typography>{comboSet.name ?? "Combo set"}</Typography>
              </MenuItem>
            ))}
          </MenuList>
        ) : (
          comboSets?.map((comboSet) => (
            <Link key={comboSet._id} style={{ textDecoration: "none" }} to={`/combo-set/${charId}/${comboSet._id}`}>
              <ComboSetPreviewCard comboSet={comboSet} charId={charId} />
            </Link>
          ))
        )}
      </Collapse>
      <Stack direction="column" alignItems="center" sx={{ pt: 1 }}>
        <Pagination
          page={noQParams ? noQParamsPage : page}
          shape="rounded"
          count={comboCount}
          onChange={(e, page) => {
            if (noQParams) {
              setNoQParamsPage(page);
              searchNoQParams(noQparamsSearchText, page);
            }
          }}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={
                noQParams ? null : getNewPageQueryParams(item.page, searchParams)
              }
              {...item}
            />
          )}
        />
      </Stack>
    </Card>
  );
}
