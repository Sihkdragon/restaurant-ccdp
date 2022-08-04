import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableRow from "../../components/atoms/TableRow";
import Dashboard from "../../components/pages/Dashboard";
import { DatabaseMenu } from "../Database";
import { ListMenu } from "../interfaces/listMenu";
import { MenuItem } from "../interfaces/menuIItem";

const AdminView = () => {
  const [Menu, setMenu] = useAtom(DatabaseMenu);
  const [tempListMenu, setMenutempListMenu] = useAtom<ListMenu>(DatabaseMenu);
  const [tempMenu, setTempMenu] = useState<MenuItem>();
  const [menuID, setMenuID] = useState<any>();
  const [NamaMakanan, setNamaMakanan] = useState("");
  const [jenis, setJenis] = useState("");
  const [harga, setHarga] = useState<any>(0);
  let navigate = useNavigate();
  return (
    <Dashboard>
      <div className="overflow-x-auto">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">No</th>
                  <th className="py-3 px-6 text-left">Nama Makanan</th>
                  <th className="py-3 px-6 text-center">Jenis</th>
                  <th className="py-3 px-6 text-center">Harga</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {Menu.map((item, index) => {
                  return (
                    <TableRow
                      index={index}
                      NamaMenu={item.NamaMenu}
                      harga={item.harga}
                      jenis={item.jenis}
                      key={index}
                    />
                  );
                })}

                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <th className="py-3 px-6 text-left">
                    <input
                      type="text"
                      className="w-5 border"
                      onChange={(e) => {
                        setMenuID(e.target.value);
                      }}
                    />
                  </th>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">
                        <input
                          type="text"
                          className="w-52 border "
                          onChange={(e) => {
                            setNamaMakanan(e.target.value);
                          }}
                        />
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <select
                      value={jenis}
                      className="w-20 border bg-white"
                      onChange={(e) => {
                        setJenis(e.target.value);
                      }}
                    >
                      <option value="Makanan">Makanan</option>
                      <option value="Minuman">Minuman</option>
                    </select>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <input
                        type="text"
                        className=" w-20 bg-purple-200 text-purple-600 py-1 px-3 rounded text-xs "
                        onChange={(e) => {
                          setHarga(e.target.value);
                        }}
                      />
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <button
                        className="bg-gray-200 rounded px-2 py-1"
                        onClick={() => {
                          let tempObj = {
                            id: menuID,
                            NamaMenu: NamaMakanan,
                            jenis: jenis,
                            harga: harga,
                          };
                          console.log(tempObj);
                          setTempMenu(tempObj);
                          setMenu([...Menu, tempObj]);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AdminView;
