import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { isLoggedIn } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Login from "../../components/pages/Login";

const LogoutMiddleware = () => {
  const [loginStatus] = useAtom(isLoggedIn);
  let navigate = useNavigate();

  useEffect(() => {
    if (loginStatus) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <Login />
    </>
  );
};

export default LogoutMiddleware;
