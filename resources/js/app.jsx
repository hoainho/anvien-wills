import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { Link, createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import ApplicationLogo from "./Components/ApplicationLogo";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <div>
                {/* Navbar */}
                <div className="flex items-center justify-between mb-[32px] bg-av-black px-[64px] py-[22px]">
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                    <img src="icons/menu.svg" alt="menu-toggle" />
                </div>
                <div className="container">
                    <App {...props} />
                </div>
            </div>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
