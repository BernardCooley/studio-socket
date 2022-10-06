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
            shadow: {
                dark: "0 25px 50px -12px rgb(0 0 0 / 0.95)",
            },
            scale: {
                85: ".85",
            },
        },
    },
    plugins: [],
};
