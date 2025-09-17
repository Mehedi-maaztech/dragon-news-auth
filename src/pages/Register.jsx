import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {    

    const {createUser, setUser} = useContext(AuthContext);
    const handleFormSubmit = e => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const photourl = e.target.photourl.value;
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(name, photourl, email, password);

        const form = new FormData(e.target);
        console.log(Object.fromEntries(form.entries()));
        //e.target.reset();
        createUser(form.get('email'), form.get('password'))
        .then(result => {
            const loggedUser = result.user;
            setUser("Regiestered user",loggedUser);
            console.log(loggedUser);
            e.target.reset();
        })
        .catch(error => {
            console.log(error.message);
        });
    }
    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <div className="card-body">
                    <h3 className="text-4xl text-center py-5">Register your acount</h3>
                    <form className="fieldset" onSubmit={handleFormSubmit}>
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input w-full shadow-md" placeholder="Name" />

                        <label className="label">Photo URL</label>
                        <input name="photourl" type="text" className="input w-full shadow-md" placeholder="Photo URL" />

                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full shadow-md" placeholder="Email" />

                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full shadow-md" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div className="text-center mt-6">
                            <button className="btn btn-neutral btn-wide">Login</button>
                        </div>
                        <p className="text-center py-5 text-gray-400">Don&apos;t have an account ? <Link to="/auth/login" className="font-bold text-red-800">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;