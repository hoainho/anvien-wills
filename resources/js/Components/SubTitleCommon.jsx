export default function SubTitleCommon({ className = "", ...props }) {
    return (
        <h3
            {...props}
            className={"w-full text-av-primary font-semibold text-[16px] leading-[28px] mt-[8px] " + className}
        >
            {props.children}
        </h3>
    );
}
