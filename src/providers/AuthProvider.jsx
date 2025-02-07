import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase.init'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign out method call here
    const signOutUser = () => {
        return signOut(auth)
    }
    // this function work like a observer on user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        createUser, signInUser, user , signOutUser
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