import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const {loginUser, user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        console.log(Object.fromEntries(form.entries()));
        //e.target.reset();
        
        loginUser(form.get('email'), form.get('password'))
        .then(result => {
            const loggedUser = result.user;
            setUser(loggedUser);
            console.log(user);
            e.target.reset();
            navigate("/");
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    
    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h3 className="text-4xl text-center py-5">Login your acount</h3>
                    <form className="fieldset" onSubmit={handleLoginSubmit}>
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full shadow-md" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full shadow-md" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div className="text-center mt-6">
                            <button className="btn btn-neutral btn-wide">Login</button>
                        </div>
                        <p className="text-center py-5 text-gray-400">Don&apos;t have an account ? <Link to="/auth/register" className="font-bold text-red-800">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;