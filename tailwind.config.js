/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                auth: "url('../public/assets/backgrounds/modular-side-dark.jpg')",
                table: "url('../public/assets/backgrounds/table-top.jpeg')",
                woodFloor:
                    "url('../public/assets/backgrounds/wood-floor.jpeg')",
            },
            backgroundSize: {
                full: "100% 100%",
            },
            minHeight: {
                val: "40px",
            },
            boxShadow: {
                dark: "-1px 9px 30px 0px rgba(0,0,0,0.32)",
            },
            scale: {
                85: ".85",
            },
            colors: {
                primary: "#94a3b8",
                secondary: "#111827",
                offWhite: "#f8fafc",
                error: "#ef4444",
                formLabel: "#64748b",
            },
            backgroundColor: {
                primaryOpaque: "rgba(148,163,184,0.65)",
            },
        },
    },
    plugins: [],
};
