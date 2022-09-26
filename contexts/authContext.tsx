import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

type AuthContextProviderProps = {
    user: boolean;
    children: any;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState({
        name: "Bernard",
    });

    const login = () => {
        setUser({});
        console.log("logged in");
    };

    const logout = () => {
        setUser({});
        console.log("logged out");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
