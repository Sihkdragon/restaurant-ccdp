import { PlusCircleIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { isLoggedIn } from "../../app/services/auth";
import ModalInput from "../organisms/ModalInput";
import Sidebar from "../organisms/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log(isLoggedIn);
  }, []);
  return (
    <>
      <ModalInput />
      <div className="p-5 h-screen w-full bg-blue-600">
        <div className=" h-full bg-white overflow-hidden flex flex-col rounded-xl n shadow-xl">
          <div className="h-full flex">
            <Sidebar />
            <section className="h-full w-full pt-10 px-5">
              <div className="flex justify-between">
                <h1 className="text-5xl font-medium text-slate-600">
                  Halo Admin
                </h1>
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-400 my-4 flex items-center gap-2">
                  <PlusCircleIcon className="w-5" /> Add Data
                </button>
              </div>
              <div className="p-1">{children}</div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
