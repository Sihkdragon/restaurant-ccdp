import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
interface TableRowProps {
  index: number;
  NamaMenu: string;
  jenis: string;
  harga: number;
}
const TableRow = ({ index, NamaMenu, jenis, harga }: TableRowProps) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <th className="py-3 px-6 text-left">{index + 1}.</th>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{NamaMenu}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">{jenis}</td>
      <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded text-xs">
          {harga}
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
  );
};

export default TableRow;
