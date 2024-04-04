import { Link } from "@inertiajs/react";

export default function ApplicationLogo({
    className = "",
    src = "images/logo.png",
}) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Link>
                <img src={src} alt="logo-app" className="w-full h-full" />
            </Link>
        </div>
    );
}
