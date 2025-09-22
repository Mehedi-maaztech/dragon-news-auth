import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {

  const { signInWithGoogle, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate("/");  
      })
      .catch(error => {
        alert(error.message);
      })
  }
  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button className="btn" onClick={handleSignInWithGoogle}>
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn ">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
