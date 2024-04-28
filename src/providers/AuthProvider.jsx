import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './FirebaseProvider'
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateprofile = (name, url)=>{
        setLoading(true);
        updateProfile(auth.currentUser,{
            displayName:  name,
            photoURL: url,
        })
            .then(
                console.log('your profile Updated!!!')
            )
            .catch(
                console.log('Profile cannot updated!!!')
            )
    }

    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const twitterLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, cur_user=>{
            setUser(cur_user);
            setLoading(false);
        });
        return ()=>{
            unsubscribe()
        }
    },[]);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateprofile,
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