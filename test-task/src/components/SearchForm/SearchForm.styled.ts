import { BASE_BLACK, BASE_WHITE, ERROR_COLOR } from "../../styles/colors.ts";

export const SearchFormStyles = {
  formWrapper: {
    padding: "30px 0px 30px 0px",
    margin: "auto",
    maxWidth: "300px",
    width: "100%",
  },
  errorText: {
    margin: "20px 0px 20px 0px",
    fontSize: "38px",
    fontWeight: "900",
    color: ERROR_COLOR,
  },
  searchStyles: {
    boxSizing: " border-box",
    padding: "10px",
    width: "100%",
    fontSize: "16px",
    marginBottom: "10px",
    display: "block",
  },
  buttonStyles: {
    padding: "10px",
    width: "100%",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: BASE_BLACK,
    color: BASE_WHITE,
    border: "none",
    borderRadius: "4px",
    display: "block",
  },
};
