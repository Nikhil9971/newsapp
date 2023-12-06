import { atom } from "recoil";

const newsState = new atom({
  key: "newsState",
  default: [],
});

export default newsState;
