import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { isEqual } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

const getFlatSearchTerms = (URLsearchParamInstance, searchTerms) => {
  const flatParams = [];

  for (var [_, value] of URLsearchParamInstance.entries()) {
    const term = searchTerms.find((st) => st.name === value);
    if (term) {
      flatParams.push(term);
    }
  }

  return flatParams;
};

export default function UngroupedSearchBar(props) {
  let [searchParams, setSearchParams] = useSearchParams();
  const { searchTerms, placeholder, disabled } = props;

  const [selectedTerms, setSelectedTerms] = useState([]);

  useEffect(() => {
    const flatSearchTerms = getFlatSearchTerms(searchParams, searchTerms);
    if (!isEqual(flatSearchTerms, selectedTerms)) {
      // prevents a cycle
      setSelectedTerms(flatSearchTerms);
    }
  }, [searchTerms, searchParams]);

  const handleSearch = (terms) => {
    const newParams = new URLSearchParams();
    terms.forEach((term) => {
      newParams.append("tags", term.name);
    });
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
        handleSearch(selectedTerms);
      }}
    >
      <Stack direction="row" sx={{ py: 1 }}>
        <Autocomplete
          ref={searchRef}
          value={selectedTerms}
          disabled={disabled}
          multiple
          id="tags-outlined"
          options={searchTerms}
          getOptionLabel={(option) => option.name}
          filterSelectedOptions
          isOptionEqualToValue={(option, value) => option.name === value.name}
          style={{ width: "100%" }}
          onChange={(event, val) => setSelectedTerms(val)}
          renderInput={(params) => (
            <TextField {...params} placeholder={placeholder} />
          )}
        />

        <Button
          variant="contained"
          sx={{ ml: 1, maxHeight: "60px" }}
          disabled={disabled}
          onClick={() => {
            handleSearch(selectedTerms);
          }}
        >
          <SearchIcon />
        </Button>
      </Stack>
    </form>
  );
}
