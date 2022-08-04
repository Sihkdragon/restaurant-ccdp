import { atom } from "jotai";
import { user } from "../interfaces/user";

export const DefaultUser: user[] = [
  { id: 1, Name: "Junantoro", password: "admin", role: "Admin" },
  { id: 2, Name: "Arnold", password: "chef", role: "Chef" },
  { id: 3, Name: "Renata Inchengoff", password: "kasir", role: "Cashier" },
  { id: 4, Name: "Yono Suryana", password: "pelayan", role: "Waiters" },
];
const User = atom(DefaultUser);

export default User;
