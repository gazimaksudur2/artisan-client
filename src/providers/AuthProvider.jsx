import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from './FirebaseProvider'
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth/cordova';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const createUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    const googleLogin = ()=>{
        return signInWithPopup(googleProvider);
    }

    const githubLogin = ()=>{
        return signInWithPopup(githubProvider);
    }

    const twitterLogin = ()=>{
        return signInWithPopup(twitterProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, cur_user=>{
            setUser(cur_user);
        });
        return (
            unsubscribe()
        )
    },[])
    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        logIn,
        googleLogin,
        githubLogin,
        twitterLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;