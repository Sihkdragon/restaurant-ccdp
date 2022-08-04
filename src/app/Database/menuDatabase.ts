import { atom } from "jotai";
import { MenuItem } from "../interfaces/menuIItem";

const DefaultMenu: MenuItem[] = [
  { id: 1, NamaMenu: "Rendang", harga: 15000 },
  { id: 2, NamaMenu: "Salmon Asam Manis", harga: 55000 },
  { id: 3, NamaMenu: "Kambing Guling", harga: 75000 },
  { id: 4, NamaMenu: "Nasi Goreng", harga: 30000 },
  { id: 5, NamaMenu: "Mie Goreng", harga: 28000 },
];
const DatabaseMenu = atom(DefaultMenu);

export default DatabaseMenu;
