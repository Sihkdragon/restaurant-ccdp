import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";
interface TableProps {
  iterator: number;
  NamaMakanan: string;
  Jenis: string;
  Harga: number;
}
const Table = () => {
  return (
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
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <th className="py-3 px-6 text-left">1.</th>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="mr-2"></div>
                    <span className="font-medium">React Project</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">tess</td>
                <td className="py-3 px-6 text-center"></td>
                <td className="py-3 px-6 text-center">
                  <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                    Active
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <EyeIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <PencilIcon />
                    </div>
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <TrashIcon />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
