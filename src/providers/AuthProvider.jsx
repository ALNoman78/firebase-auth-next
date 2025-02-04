import React, { createContext } from 'react'

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const authInfo = {
        name : 'Moule',
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