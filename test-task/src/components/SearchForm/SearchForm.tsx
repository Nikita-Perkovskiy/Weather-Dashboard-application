import React from "react";
import { SearchFormStyles } from "./SearchForm.styled.ts";

export const SearchForm = ({
  searchFunction,
  searchValue,
  changeValueFunction,
  isError,
}) => {
  console.log("isError in Search Form", isError);
  return (
    <form>
      <div style={SearchFormStyles.formWrapper}>
        <input
          type="text"
          value={searchValue}
          onChange={changeValueFunction}
          placeholder="Enter search term"
          style={SearchFormStyles.searchStyles}
        />
        {isError ? (
          <p style={SearchFormStyles.errorText}>
            Something's gone wrong! Please change your request!
          </p>
        ) : null}
        <button onClick={searchFunction} style={SearchFormStyles.buttonStyles}>
          Search
        </button>
      </div>
    </form>
  );
};
