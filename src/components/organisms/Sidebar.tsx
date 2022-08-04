import { HomeIcon } from "@heroicons/react/outline";
const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-full border-r pt-10 px-5">
        <p className="text-xs font-medium text-gray-400">MAIN</p>
        <div className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center">
          <HomeIcon className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500" />
          Dashboard
        </div>
      </div>
    </>
  );
};

export default Sidebar;
