import Link from "next/link";
import React from "react";
import { routes } from "../routes";
import { AccountCircleRounded, Settings, Logout } from "@mui/icons-material";
import { getRoute } from "../utils";
import { useAuth } from "../contexts/AuthContext";
import useRouter from "next/router";

interface Props {}

const Navigation = ({}: Props) => {
    const router = useRouter;
    const { logout } = useAuth();

    const signOut = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <div className="bg-red-500/50 fixed z-10 w-full h-16">
            <ul className="list-none flex justify-start items-center h-full text-xl ml-10">
                {routes.map((route) => {
                    if (route.protected && route.showInNav) {
                        return (
                            <li
                                key={route.name}
                                className="h-full flexCenter mr-10"
                            >
                                <Link passHref href={route.path}>
                                    <a className="navItems">{route.name}</a>
                                </Link>
                            </li>
                        );
                    }
                })}
                <div className="absolute right-4 flexCenter">
                    <Link passHref href={getRoute("Account").path}>
                        <div className="navIcons">
                            <AccountCircleRounded sx={{ fontSize: 40 }} />
                        </div>
                    </Link>
                    <Link passHref href={getRoute("Settings").path}>
                        <div className="navIcons">
                            <Settings sx={{ fontSize: 40 }} />
                        </div>
                    </Link>
                    <div className="navIcons" onClick={signOut}>
                        <Logout sx={{ fontSize: 40 }} />
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Navigation;
