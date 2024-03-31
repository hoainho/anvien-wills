
export default function ContainerLandingPage({ className = "", children }) {
    return (
        <div className={`flex flex-col my-[20px] md:mt-0 md:py-[80px] ${className}`}>
            {children}
        </div>
    );
}
