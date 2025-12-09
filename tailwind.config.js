/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0A192F', // Deep Navy
                    800: '#112240',
                },
                gold: {
                    400: '#D4AF37', // Classic Gold
                    500: '#C5A028',
                },
                sand: {
                    100: '#F5F5F0',
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Outfit"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
