import { useEffect } from "react";
import { isLoggedIn } from "../../app/services/auth";
import Sidebar from "../organisms/Sidebar";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log(isLoggedIn);
  }, []);
  return (
    <>
      <div className="p-5 h-screen w-full bg-blue-600">
        <div className=" h-full bg-white overflow-hidden flex flex-col rounded-xl n shadow-xl">
          <div className="h-full flex">
            <Sidebar />
            <section className="h-full w-full pt-10 px-5">
              <div className="flex justify-between">
                <h1 className="text-5xl font-medium text-slate-600">
                  Halo Admin
                </h1>
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
