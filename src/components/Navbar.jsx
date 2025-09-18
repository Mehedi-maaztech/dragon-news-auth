import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {

  const {user, logout} = useContext(AuthContext);
  console.log(user);
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
          <img src={user.photoURL} alt="" className="w-10 rounded-full"/>
        </div>
        {
          user ? <button onClick={logout} className="btn btn-neutral rounded-none">Logout</button> : <Link to="/auth/login" className="btn btn-neutral rounded-none">
          Login 
        </Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
