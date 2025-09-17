import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="w-full p-8 bg-base-200 rounded shadow">
        <header>
          <Navbar></Navbar>
        </header>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
  );
};

export default AuthLayout;
