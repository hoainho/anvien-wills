export default function ApplicationLogo({className = ""}) {
    return (
        <div className={`w-full h-full ${className}`}>
            <img src="images/logo.png" alt="logo-app" className="w-full h-full"/>
        </div>
    );
}
