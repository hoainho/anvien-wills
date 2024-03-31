
export default function TitleCommon({ className = '', ...props }) {

    return (
        <h1
            {...props}
            className={
                'text-[48px] leading-[57px] text-av-bold font-bold mb-[20px] break-words ' +
                className
            }
        >
            {props.children}
        </h1>
    );
};
