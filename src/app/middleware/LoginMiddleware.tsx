import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, username } from "../services/auth";

const LoginMiddleware = ({ render }: { render: React.ReactNode }): any => {
  const [loginStatus] = useAtom(isLoggedIn);
  const [Username] = useAtom(username);
  let navigate = useNavigate();

  useEffect(() => {
    if (!loginStatus) {
      navigate("/login", { replace: true });
    }
  }, []);

  return render;
};

export default LoginMiddleware;
