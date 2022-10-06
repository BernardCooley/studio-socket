import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoutes";
import { AuthContextProvider, useAuth } from "../contexts/AuthContext";

const noAuthRequired = ["/", "/login", "/register"];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { user } = useAuth();

    return (
        <AuthContextProvider>
            {user?.uid && noAuthRequired.includes(router.pathname) ? (
                <Component {...pageProps} />
            ) : (
                <ProtectedRoute user={user}>
                    <Component {...pageProps} />
                </ProtectedRoute>
            )}
        </AuthContextProvider>
    );
}

export default MyApp;
