import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext } from 'react'
import auth from '../firebase.init'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth, email , password)
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth , email, password)
    }

    const name = 'Maisa Monoara Moule';

    const authInfo = {
        name , createUser , signInUser
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