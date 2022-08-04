import { atom } from "jotai";
import { MenuItem } from "../interfaces/menuIItem";

const DefaultMenu: MenuItem[] = [
  { id: 1, NamaMenu: "Rendang", jenis: "Makanan", harga: 15000 },
  { id: 2, NamaMenu: "Salmon Asam Manis", jenis: "Makanan", harga: 55000 },
  { id: 3, NamaMenu: "Kambing Guling", jenis: "Makanan", harga: 75000 },
  { id: 4, NamaMenu: "Nasi Goreng", jenis: "Makanan", harga: 30000 },
  { id: 5, NamaMenu: "Mie Goreng", jenis: "Makanan", harga: 28000 },
];
const DatabaseMenu = atom(DefaultMenu);

export default DatabaseMenu;
