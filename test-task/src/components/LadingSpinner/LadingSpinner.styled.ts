import { BASE_WHITE } from "../../styles/colors.ts";

export const loadingSpinnerStyles = {
  spinnerWrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: BASE_WHITE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "100",
  },
};
