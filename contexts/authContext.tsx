import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    UserCredential,
} from "firebase/auth";
import { auth } from "../firebase/clientApp";
interface User {
    uid?: string;
    email?: string | null;
    displayName?: string | null;
}

interface AuthContextProps {
    user: User | object;
    login: (email: string, password: string) => Promise<UserCredential>;
    register: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | object>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | object>({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                });
            } else {
                setUser({});
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const register = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        setUser({});
        await signOut(auth);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
            }}
        >
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
