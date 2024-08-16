import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.cofig";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    // create user-------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // ------------login--------------------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ----------Google Login-------------
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // -------------logout------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const allData = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;