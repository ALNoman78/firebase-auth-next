import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase.init'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        return signInWithPopup(auth , googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        //  why use setLoading here ? => because we want to wait our user for log in true/false until firebase send us confirmation
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out method call here
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    // this function work like a observer on user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

AuthProvider.propTypes = {}

export default AuthProvider

/**
* 1. create context with null as default
* 2. Create Provider
* 3. set a default value
* 4. use the authProvider in the main.jsx
* 6. access the children inside the authProvider in the main.jsx
*
*/