import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  FormHelperText,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { isEqual } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FreeSearchBar(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const { placeholder, disabled, compact } = props;
  const theme = useTheme();

  const [searchString, setSearchString] = useState("");
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
    handleSearch(searchString, event.target.value, sortDirection);
  }

  useEffect(() => {
    const newSearchString = searchParams.get("search");
    if (!isEqual(newSearchString, searchString)) {
      // prevents a cycle
      setSearchString(newSearchString);
    }
    if (searchParams.get("sort") !== sortBy) {
      setSortBy(searchParams.get("sort") ?? sortByOptions[0]);
    }
    if (searchParams.get("sortdirection") !== sortDirection) {
      setSortDirection(searchParams.get("sortdirection") ?? -1);
    }
  }, [searchParams]);

  const handleSearch = (searchString, sortBy, sortDirection) => {
    // if (!searchString) return;

    const newParams = new URLSearchParams();

    newParams.append("search", searchString ?? "");
    newParams.append("sort", sortBy);
    newParams.append("sortdirection", sortDirection);

    setSearchParams(newParams);
  };

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const keydownHandler = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSearch(searchString, sortBy, sortDirection);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(searchString, sortBy, sortDirection);
      }}
    >
      <Stack>
        {compact ? null : (
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
                style={{
                  marginRight: "10px",
                  height: "20px",
                  fontSize: "12px",
                }}
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
                onChange={(e) => { setSortDirection(e.target.value); handleSearch(searchString, sortBy, e.target.value); }}
                size="small"
                style={{
                  marginRight: "10px",
                  height: "20px",
                  fontSize: "12px",
                }}
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
        )}
        <Stack direction="row" sx={{ py: 1 }}>
          <TextField
            id="free-search-bar"
            ref={searchRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchString, sortBy, sortDirection);
              } else {
                e.stopPropagation();
              }
            }}
            value={searchString ?? ""}
            disabled={disabled}
            style={{ width: "100%" }}
            placeholder={placeholder}
            size={compact ? "small" : ""}
            onChange={(val) => setSearchString(val.target.value)}
            autoComplete='off'
          />

          <Button
            variant="contained"
            sx={{ ml: 1, maxHeight: compact ? "40px" : "60px" }}
            disabled={disabled}
            onClick={() => {
              handleSearch(searchString, sortBy, sortDirection);
            }}
          >
            <SearchIcon />
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
