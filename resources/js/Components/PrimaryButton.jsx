import { Link } from "@inertiajs/react";

export default function PrimaryButton({ className = "", href, children, ...props }) {
    return (
        <Link
            {...props}
            href={href}
            className={"w-1/2 tracking-tight text-[18px] leading-[28px] text-center py-[16px] bg-av-primary text-av-white font-semibold rounded-[8px] mr-[20px] " + className}
        >
            {children}
        </Link>
    );
}
