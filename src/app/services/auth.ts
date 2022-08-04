import { atom } from "jotai";
const isLoggedIn = atom(false);
const username = atom("");
export { isLoggedIn, username };
