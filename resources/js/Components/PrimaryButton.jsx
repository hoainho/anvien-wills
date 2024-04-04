
export default function PrimaryButton({ className = "", href = "https://will.anvien.online/", children, ...props }) {
    return (
        <a
            {...props}
            href={href}
            className={"w-1/2 tracking-tight text-[18px] leading-[28px] text-center py-[16px] bg-av-primary text-av-white font-semibold rounded-[8px] mr-[20px] cursor-pointer " + className}
        >
            {children}
        </a>
    );
}
