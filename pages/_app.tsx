import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoutes";
import { AuthContextProvider } from "../contexts/AuthContext";
import { NavigationContextProvider } from "../contexts/NavigationContext";

const noAuthRequired = ["/", "/login", "/register"];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <NavigationContextProvider>
            <AuthContextProvider>
                {noAuthRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                )}
            </AuthContextProvider>
        </NavigationContextProvider>
    );
}

export default MyApp;
