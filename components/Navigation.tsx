import Link from "next/link";
import React, { useState } from "react";
import { routes } from "../routes";
import {
    AccountCircleRounded,
    Settings,
    Logout,
    Close,
    Menu,
} from "@mui/icons-material";
import { getRoute } from "../utils";
import { useAuth } from "../contexts/AuthContext";
import useRouter from "next/router";

interface Props {}

const Navigation = ({}: Props) => {
    const router = useRouter;
    const { logout } = useAuth();
    const [showNav, setShowNav] = useState<boolean>(false);

    const signOut = async () => {
        toggleNav();
        await logout();
        router.push("/login");
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div
            className={`${
                !showNav
                    ? "w-10 md:w-full right-0 bg-transparent md:bg-red-500"
                    : "w-full bg-red-500"
            } fixed z-10 w-full h-auto md:h-16 p-10 md:p-0`}
        >
            <div
                onClick={toggleNav}
                className={`${
                    showNav ? "block" : "hidden"
                } absolute right-4 top-4 block md:hidden`}
            >
                <Close sx={{ fontSize: 40 }} />
            </div>

            <div
                onClick={toggleNav}
                className={`${
                    !showNav ? "block" : "hidden"
                } absolute right-4 top-4 block md:hidden`}
            >
                <Menu sx={{ fontSize: 40 }} />
            </div>

            <ul
                className={`${
                    !showNav ? "h-0 md:h-full" : "h-72 md:h-full"
                } list-none flex justify-start items-start md:items-center text-xl ml-0 md:ml-10 flex-col md:flex-row ease-in-out duration-200 overflow-hidden`}
            >
                {routes.map((route) => {
                    if (route.protected && route.showInNav) {
                        return (
                            <li
                                key={route.name}
                                className="h-full flexCenter mr-10"
                            >
                                <Link passHref href={route.path}>
                                    <a onClick={toggleNav} className="navItems">
                                        {route.name}
                                    </a>
                                </Link>
                            </li>
                        );
                    }
                })}
                <div className="relative md:absolute right-0 md:right-4 flexCenter flex-row">
                    <Link passHref href={getRoute("Account").path}>
                        <div onClick={toggleNav} className="navIcons">
                            <AccountCircleRounded sx={{ fontSize: 40 }} />
                        </div>
                    </Link>
                    <Link passHref href={getRoute("Settings").path}>
                        <div onClick={toggleNav} className="navIcons">
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
