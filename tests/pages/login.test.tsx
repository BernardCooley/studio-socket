import React from "react";
import { render, screen, within } from "@testing-library/react";
import MyApp from "../../pages/_app";
import Login from "../../pages/login";

describe("Login page", () => {
    const renderPage = async (_props = {}) => {
        return render(<MyApp Component={Login} pageProps={{}} {..._props} />);
    };

    it("should match snapshot", async () => {
        await renderPage();

        const loginPage = screen.getByTestId("login-page");

        expect(loginPage).toMatchSnapshot();
    });
});
