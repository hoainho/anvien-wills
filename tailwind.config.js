import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sfp: ["SFPDisplay", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            "av-primary": "#409587",
            "av-light": "#667085",
            "av-normal": "#454953",
            "av-bold": "#0F172A",
            "av-white": "#FFFFFF",
            "av-black": "#212939",
            "av-semi-light": "#F8FAFC",
            "av-border": "#F4F4F5",
            "av-bg": "#0F172A",
            "av-bg-card": "#DBEAFE",
        },
    },

    plugins: [forms],
};
