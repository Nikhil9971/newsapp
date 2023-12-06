import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    email: "",
    password: "",
    fav: [],
  },
});

export default userState;
