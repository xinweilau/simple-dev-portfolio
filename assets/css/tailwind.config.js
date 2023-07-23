/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../../../**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                darkblue: "#0E192C",
                primary: "#D0E6F0",
                secondary: "#FBE5C0",
                tertiary: "#F88379",
                content: "#F5F5F5",
                button: "#8C7C6C",
            },
            content: {
                line: "",
            },
            fontSize: {
                "3xl": "1.75rem",
                "7xl": "4rem",
            },
            fontFamily: {
                asap: ["Asap"],
            },
            borderWidth: {
                0.5: "0.5px",
            },
            height: {
                timeline: "calc(100% - 1rem)",
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
