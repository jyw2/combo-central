import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Stack,
  TextField
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";

export default function NoQParamsFreeSearchBar(props) {
  const { placeholder, disabled, compact, handleSearch } = props;
  const theme = useTheme();

  const [searchString, setSearchString] = useState("");

  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const keydownHandler = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSearch(searchString);
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
        handleSearch(searchString);
      }}
    >
      <Stack>
        <Stack direction="row" sx={{ py: 1 }}>
          <TextField
            id="free-search-bar"
            ref={searchRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(searchString);
              } else {
                e.stopPropagation();
              }
            }}
            value={searchString}
            disabled={disabled}
            style={{ width: "100%" }}
            placeholder={placeholder}
            size={compact ? "small" : ""}
            onChange={(val) => setSearchString(val.target.value)}
            inputProps={{
              autoComplete: "new-password",
            }}
            autoComplete="off"
          />

          <Button
            variant="contained"
            sx={{ ml: 1, maxHeight: compact ? "40px" : "60px" }}
            disabled={disabled}
            onClick={() => {
              handleSearch(searchString);
            }}
          >
            <SearchIcon />
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
