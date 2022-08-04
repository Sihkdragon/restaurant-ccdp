import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminView from "../view/AdminView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminView />} />
        {/* <Route path="/" element={<LoginMiddleware render={<AdminView />} />} /> */}
        {/* <Route path="/login" element={<LogoutMiddleware />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
