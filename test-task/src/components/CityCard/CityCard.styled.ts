import { BASE_BLACK } from "../../styles/colors.ts";

export const cityCardStyles = {
  cardWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexWrap: "wrap",
    border: `1px solid ${BASE_BLACK}`,
    padding: "16px",
    borderRadius: "8px",
    maxWidth: "1000px",
    width: "100%",
    margin: "auto",
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexWrap: "wrap",
    gap: "10px",
  },
  cardName: {
    fontSize: "16px",
    fontWeight: "900",
  },
  cardText: {
    fontSize: "16px",
  },
  iconWrapper: {
    margin: "0px 15px 0px 15 px",
  },
};
