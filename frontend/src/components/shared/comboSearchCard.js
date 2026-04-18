import {
  Card,
  Collapse,
  Divider,
  LinearProgress,
  Pagination,
  PaginationItem,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { CharacterContext } from "context/characterContext.js";
import { orderBy } from "lodash";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import HttpClient from "../../services/httpClient.js";
import ComboRenderSelectorRow from "../shared/comboRenderSelectorRow.js";
import ComboPreviewCard from "./comboPreviewCard.js";
import SearchBar from "./searchBar.js";

function getNewPageQueryParams(page, queryParamsObj) {
  const newParams = new URLSearchParams(queryParamsObj.toString());
  newParams.delete("charid");
  newParams.delete("userid");
  newParams.set("page", page);

  const newParamsString = newParams.toString();
  return newParamsString ? `?${newParamsString}` : "";
}

export default function ComboSearchCard(props) {
  const { charId } = useParams();
  const theme = useTheme();
  const [combos, setCombos] = useState([]);
  const navigate = useNavigate();
  const { userId, likesOnly, comboPrefix } = props;
  const location = useLocation();
  const characterContext = useContext(CharacterContext);

  const largeScreenSize = useMediaQuery(theme.breakpoints.up('md'))


  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [comboCount, setComboCount] = useState(1);
  const [searchTerms, setSearchTerms] = useState([]);

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

  useEffect(() => {
    async function handleSearch() {
      try {
        if (hasFilters()) {
          const comboRes = await HttpClient.getCombos(
            charId,
            userId ?? "",
            searchParams,
            !!likesOnly
          );
          setComboCount(comboRes.count);
          setCombos(comboRes.combos);
        } else {
          setCombos([]);
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
  }, [searchParams]);

  useEffect(() => {
    HttpClient.getPresetActionNamesAndIds(charId).then((presets) => {
      const actionGroups = [
        "starts with action",
        "contains action",
        "ends with action",
        "without action",
      ];
      const newSearchTerms = [];

      presets?.forEach((p) => {
        for (var actionGroup of actionGroups) {
          newSearchTerms.push({
            name: p.name,
            value: p.id,
            group: actionGroup,
            conjunction: " ",
          });
        }
      });

      HttpClient.getPropSearchTerms().then((propTerms) => {
        propTerms?.forEach((p) => {
          for (let value of p.values) {
            newSearchTerms.push({
              name: value,
              group: p.name,
              conjunction: p.conjunction,
            });
          }
        });
        setSearchTerms(orderBy(newSearchTerms, ["group"]));
      });
    });
  }, []);

  const isInteractable = () => !isLoading && searchTerms.length;

  function renderHelp() {
    if (!isLoading && combos?.length <= 0) {
      return (
        <Typography sx={{ my: 4 }}>
          {error
            ? error
            : hasFilters() <= 0
              ? "Add some search terms to get started"
              : "No combos found. Try adjusting the search terms"}
        </Typography>
      );
    }
  }
  return (
    <Card sx={{ p: 3, position: "relative", overflow: "visible", width:"100%", boxSizing: "border-box"  }}>
      <Typography
        style={{
          fontSize: "25px",
          position: "absolute",
          fontWeight: "bold",
          top: "-15px",
          left: "15px",
        }}
      >
        {comboPrefix?.toUpperCase() ?? "SEARCH"} COMBOS
      </Typography>
      <SearchBar
        searchTerms={searchTerms}
        placeholder="Position, difficulty, contains, without , starts with, ends with..."
        disabled={isLoading}
      ></SearchBar>
      <Divider sx={{ pt: 2, mb: 2 }}></Divider>
      <Stack direction="row" justifyContent="space-between">
        <ComboRenderSelectorRow collapsible={!largeScreenSize} showTags/>
      </Stack>

      {isLoading ? <LinearProgress sx={{ my: 2 }} color="secondary" /> : null}

      {renderHelp()}

      <Collapse in={!!(isInteractable() && combos?.length > 0)}>
        {combos?.map((combo, index) => (
          <Stack sx={{ m: 2 }} key={combo._id}>
            <ComboPreviewCard combo={combo} charId={charId} showDetails />
          </Stack>

        ))}
      </Collapse>
      <Stack direction="column" alignItems="center" sx={{ pt: 1 }}>
        <Pagination
          page={page}
          shape="rounded"
          count={comboCount}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={getNewPageQueryParams(item.page, searchParams)}
              {...item}
            />
          )}
        />
      </Stack>
    </Card>
  );
}
