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
    user: User;
    login: (email: string, password: string) => Promise<UserCredential>;
    register: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
    user: { uid: "", email: "", displayName: "" },
    login: () => new Promise(() => {}),
    register: () => new Promise(() => {}),
    logout: () => new Promise(() => {}),
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>({
        uid: "",
        email: "",
        displayName: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                });
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const login = async (email: string, password: string) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const register = async (email: string, password: string) => {
        return await createUserWithEmailAndPassword(auth, email, password);
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
