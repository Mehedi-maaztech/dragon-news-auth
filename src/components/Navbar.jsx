import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && <span>{user.displayName}</span>}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          {
            user ? <img src={user.photoURL} alt={user.displayName} className="w-10 rounded-full" /> : <img src={userIcon} alt="user icon" className="w-10 rounded-full" />
          }
        </div>
        <div>
          {
            user ? <button onClick={logout} className="btn btn-neutral rounded-none">Logout</button> : <Link to="/auth/login" className="btn btn-neutral rounded-none">
              Login
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
