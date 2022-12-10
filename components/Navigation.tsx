import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import { useNavigationContext } from "../contexts/NavigationContext";

interface Props {}

const Navigation = ({}: Props) => {
    const router = useRouter;
    const { logout } = useAuth();
    const { scrollPosition, scrollingDown } = useNavigationContext();
    const [showNav, setShowNav] = useState<boolean>(false);
    const [navScrollClasses, setNavScrollClasses] = useState<string>("");

    useEffect(() => {
        setNavScrollClasses(getScrollClasses);
    }, [scrollPosition]);

    const getScrollClasses = () => {
        if (scrollPosition < 50) return "translate-y-0";
        if (scrollPosition > 50 && !scrollingDown) return "translate-y-0";
        return "-translate-y-full";
    };

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
                showNav
                    ? "w-full bg-gradient-to-r from-cyan-500 to-blue-500 md:bg-primary shadow-dark"
                    : "w-10 md:w-full right-0 bg-transparent md:rounded-3xl md:bg-primary text-secondary md:shadow-dark"
            } fixed realtive z-10 w-full h-auto md:h-16 p-5 md:p-0 shadow-secondary ease-in-out duration-500 left-0 ${navScrollClasses}`}
        >
            <div>
                <div
                    onClick={toggleNav}
                    className={`${
                        showNav ? "block" : "hidden"
                    } absolute right-4 top-4 block md:hidden hover:cursor-pointer`}
                >
                    <Close sx={{ fontSize: 40 }} />
                </div>

                <div
                    onClick={toggleNav}
                    className={`${
                        !showNav ? "block" : "hidden"
                    } absolute left-2 top-2 block md:hidden hover:cursor-pointer`}
                >
                    <Menu sx={{ fontSize: 35 }} />
                </div>
            </div>

            <ul
                className={`${
                    !showNav ? "h-0 md:h-full" : "h-72 md:h-full"
                } list-none flex justify-start items-start md:items-center text-xl ml-0 md:pl-8 flex-col md:flex-row ease-in-out duration-200 overflow-hidden`}
            >
                {routes.map((route) => {
                    if (route.protected && route.showInNav) {
                        return (
                            <li
                                key={route.name}
                                className="h-full flexCenter mr-10"
                            >
                                <Link legacyBehavior passHref href={route.path}>
                                    <a
                                        onClick={toggleNav}
                                        className={`navItems ${
                                            router.asPath === route.path
                                                ? "underline underline-offset-8 hover:scale-100 font-bold"
                                                : ""
                                        }`}
                                    >
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
