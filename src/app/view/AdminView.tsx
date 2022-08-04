import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import TableRow from "../../components/atoms/TableRow";
import Dashboard from "../../components/pages/Dashboard";
import { DatabaseMenu } from "../Database";
import { ListMenu } from "../interfaces/listMenu";

const AdminView = () => {
  const [Menu] = useAtom<ListMenu>(DatabaseMenu);
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AdminView;
