import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginProcess } from "../../app/helpers/authHelpers";
import { isLoggedIn } from "../../app/services/auth";

const Login = () => {
  const [loginStatus, setLogin] = useAtom(isLoggedIn);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  return (
    <>
      {/* component */}
      <div className="container max-w-full mx-auto py-24 px-6">
        <div className="font-sans">
          <div className="max-w-sm mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <div className="mt-6">
                  <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700"></div>
                  <div className="text-center font-semibold text-black">
                    Halo, Selamat Datang di Aplikasi Restoran CCDP
                  </div>
                  <form
                    className="mt-8"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLogin(LoginProcess(username, password));
                      if (loginStatus) navigate("/", { replace: true });
                    }}
                  >
                    <div className="mx-au to max-w-lg">
                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">
                          Username
                        </span>
                        <input
                          placeholder="Username"
                          type="text"
                          onChange={(e) => {
                            setUsername(e.target.value);
                          }}
                          className="text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        />
                      </div>
                      <div className="py-2" x-data="{ show: true }">
                        <span className="px-1 text-sm text-gray-600">
                          Password
                        </span>
                        <div className="relative">
                          <input
                            type="password"
                            placeholder=""
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <label className="block text-gray-500 font-bold my-4">
                          <input
                            type="checkbox"
                            className="leading-loose text-pink-600"
                          />
                          <span className="py-2 text-sm text-gray-600 leading-snug">
                            Remember Me
                          </span>
                        </label>
                        <label className="block text-gray-500 font-bold my-4">
                          <a
                            href="#"
                            className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                          >
                            <span>Forgot Password?</span>
                          </a>
                        </label>
                      </div>{" "}
                      <button className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
