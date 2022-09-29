/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                auth: "url('../public/assets/images/modular-side-dark.jpg')",
            },
            minHeight: {
                val: "40px",
            },
        },
    },
    plugins: [],
};
