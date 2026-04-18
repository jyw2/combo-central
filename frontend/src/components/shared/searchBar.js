import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Chip,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { useTheme } from "@mui/material/styles";
import { isEqual } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ComboPieceUtil } from "util/comboPieceUtil.js";

const getFlatSearchTerms = (URLsearchParamInstance, searchTerms) => {
  const flatParams = [];

  for (var [subject, value] of URLsearchParamInstance.entries()) {
    if (typeof URLsearchParamInstance.get(subject) === "string") {
      const subjectCopy = subject;
      const term = searchTerms.find(
        (st) => ((st.value ?? st.name) === value) && st.group === subjectCopy
      );
      if (term) {
        flatParams.push(term);
      }
    }
  }
  return flatParams;
};
export default function SearchBar(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const { searchTerms, placeholder, disabled } = props;
  const theme = useTheme();

  const [selectedTerms, setSelectedTerms] = useState([]);
  const sortByOptions = ["Likes", "Date"];
  const sortByDirectionOptions = [
    { name: "Ascending", value: 1 },
    { name: "Descending", value: -1 },
  ];

  const [sortDirection, setSortDirection] = useState(
    sortByDirectionOptions[1].value
  );
  const [sortBy, setSortBy] = useState(sortByOptions[0]);

  function handleSortSelect(event) {
    setSortBy(event.target.value);
    handleSearch(selectedTerms, event.target.value, sortDirection)
  }

  useEffect(() => {
    const flatSearchTerms = getFlatSearchTerms(searchParams, searchTerms);
    if (!isEqual(flatSearchTerms, selectedTerms)) {
      // prevents a cycle
      setSelectedTerms(flatSearchTerms);
    }
    if (searchParams.get("sort") !== sortBy) {
      setSortBy(searchParams.get("sort") ?? sortByOptions[0]);
    }
    if (searchParams.get("sortdirection") !== sortDirection) {
      setSortDirection(searchParams.get("sortdirection") ?? -1);
    }
  }, [searchTerms, searchParams]);

  const handleSearch = (terms, sortBy, sortDirection) => {

    const newParams = new URLSearchParams();
    terms.forEach((term) => {
      if (term.value) {
        newParams.append(term.group, term.value)
      }
      else {
        newParams.append(term.group, term.name);
      }

    });
    newParams.append("sort", sortBy);
    newParams.append("sortdirection", sortDirection);

    setSearchParams(newParams);
  };

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(selectedTerms, sortBy, sortDirection);
      }}
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="start"
          style={{ marginBottom: "-15px" }}
        >
          <Stack>
            <FormHelperText
              align="left"
              variant="caption"
              style={{
                fontSize: "11px",
                paddingLeft: "2px",
                color: theme.palette.text.dark,
              }}
            >
              Sort by
            </FormHelperText>
            <Select
              value={sortBy}
              displayEmpty
              onChange={handleSortSelect}
              size="small"
              style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
              sx={{ mb: 2 }}
            >
              {sortByOptions.map((s) => (
                <MenuItem value={s} key={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack>
            <FormHelperText
              align="left"
              variant="caption"
              style={{
                fontSize: "11px",
                paddingLeft: "2px",
                color: theme.palette.text.dark,
              }}
            >
              Sort direction
            </FormHelperText>
            <Select
              value={sortDirection}
              displayEmpty
              onChange={(e) => { setSortDirection(e.target.value); handleSearch(selectedTerms, sortBy, e.target.value); }}
              size="small"
              style={{ marginRight: "10px", height: "20px", fontSize: "12px" }}
              sx={{ mb: 2 }}
            >
              {sortByDirectionOptions.map((s) => (
                <MenuItem value={s.value} key={s.value}>
                  {s.name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <Autocomplete
            ListboxProps={{ className: "custom-scroll-container" }}
            ref={searchRef}
            value={selectedTerms}
            disabled={disabled}
            multiple
            id="tags-outlined"
            options={searchTerms}
            getOptionLabel={(option) =>
              option.group + option.conjunction + ComboPieceUtil.formatDetail(option.name)
            }
            filterSelectedOptions
            isOptionEqualToValue={(option, value) =>
              option.group + option.name === value.group + value.name
            }
            groupBy={(option) => option.group}
            style={{ width: "100%" }}
            onChange={(event, val) => setSelectedTerms(val)}
            renderInput={(params) => (
              <TextField {...params} placeholder={placeholder} />
            )}
            renderTags={(tagValue, getTagProps) => {
              return tagValue.map((option, index) => (
                <Chip style={{ maxWidth: "52vw" }} {...getTagProps(index)}
                  label={option.group + option.conjunction + option.name} key={option.group + option.conjunction + option.name} />
              ));
            }}
          />

          <Button
            variant="contained"
            sx={{ ml: 1, maxHeight: "60px" }}
            disabled={disabled}
            onClick={() => {
              handleSearch(selectedTerms, sortBy, sortDirection);
            }}
          >
            <SearchIcon />
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
