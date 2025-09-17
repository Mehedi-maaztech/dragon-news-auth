import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/_firebase_init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


// eslint-disable-next-line no-undef, react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);  
    console.log('User in AuthProvider:', user," Loading State", loading);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }  

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser);
            //console.log('Auth state changed', currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const logout = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProvider;