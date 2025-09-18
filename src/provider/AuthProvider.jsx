/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/_firebase_init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);  
    console.log('User in AuthProvider:', user," Loading State", loading);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }  

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
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
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logout,
        updateUserProfile,
        loading,
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