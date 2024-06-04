import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';

export const authContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;