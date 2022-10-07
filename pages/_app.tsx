import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoutes";
import { AuthContextProvider } from "../contexts/AuthContext";

const noAuthRequired = ["/", "/login", "/register"];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AuthContextProvider>
            {noAuthRequired.includes(router.pathname) ? (
                <Component {...pageProps} />
            ) : (
                <ProtectedRoute>
                    <Component {...pageProps} />
                </ProtectedRoute>
            )}
        </AuthContextProvider>
    );
}

export default MyApp;
