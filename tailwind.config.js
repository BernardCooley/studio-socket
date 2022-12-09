/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                modular:
                    "url('../public/assets/backgrounds/modular-side-dark.jpg')",
                table: "url('../public/assets/backgrounds/table-top.jpeg')",
                woodFloor:
                    "url('../public/assets/backgrounds/wood-floor.jpeg')",
            },
            scale: {
                85: ".85",
            },
            boxShadow: {
                "3xl": "0 0 26px 11px #383b43",
            },
        },
        colors: {
            primary: "#383B43",
            secondary: "#ECE7E7",
            "light-gray": "#9498A0",
            error: "#FF0000",
        },
        fontFamily: {
            default: ["SairaCondensed-Thin", "sans-serif"],
            regular: ["SairaCondensed-Regular", "sans-serif"],
            black: ["SairaCondensed-Black", "sans-serif"],
            extraBold: ["SairaCondensed-ExtraBold", "sans-serif"],
            extraLight: ["SairaCondensed-ExtraLight", "sans-serif"],
            light: ["SairaCondensed-Light", "sans-serif"],
            medium: ["SairaCondensed-Medium", "sans-serif"],
            semiBold: ["SairaCondensed-SemiBold", "sans-serif"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};

// Font size reference
/*
    'page-title': "text-4xl",
    'page-subtitle': "text-lg",
    'content-text': "text-lg",
    'content-list-text': "text-lg",
    'field-label-text-lg': "text-xl",
    'field-label-text-sm': "text-xs",
    'field-error-message-text': "text-sm",
    'cta-lg-text': "text-2xl",
    'text-field-text': "text-xl",
    'dialog-text': "text-lg",
    'card-title-text': "text-sm",
    'card-subtitle': "text-lg",
    'link-text': "text-base",
    'table--heading-text': "text-base",
    'table-content-text': "text-base",
    'chip-text': "text-sm",
    'nav-item-text': "text-4xl",
    'app-title-text': "text-2xl",
    'search-results-text': "text-lg",
    'filter-button-text': "text-base",
    'dialog-title': "text-lg",
    'dialog-subtitle': "text-base",
    'dialog-cta-button-text': "text-lg",
    'dropdown-text': "text-base",
    'details-title': "text-2xl",
    'edit-details-cta-text': "text-base",
    'cta-md-text': "text-base",
    'details-subtitle': "text-lg",
    'details-page-title': "text-2xl",
    'details-page-subtitle': "text-3xl",
*/
