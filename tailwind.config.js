/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./public/index.html", ".src/**/*.vue,js,ts,tsx,jsx", ".src/components/**/*.vue,js,ts,tsx,jsx", "./src/**/*.{html,js,vue}"],
    theme: {
        extend: {
            colors: {
                primaryBlue: "#2E373C",
            },



        },
    },
    plugins: [],
}