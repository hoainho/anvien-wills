import ApplicationLogo from "@/Components/ApplicationLogo";
import NavbarPrimary from "@/Components/Navbar/NavbarPrimary";
import { Overlay } from "@/Components/Overlay";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [isOpenNavbar, setIsOpenNavbar] = useState(false);
    const handleOpenNavbar = (status) => setIsOpenNavbar(status);
    return (
        <div
            className={`relative w-full flex items-center justify-between mb-[32px] bg-av-black px-[16px] py-[12px] md:px-[64px] md:py-[22px] ${
                isOpenNavbar ? "max-h-screen" : ""
            }`}
        >
            <Link href="/">
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </Link>
            <div className="hidden md:flex">
                <NavbarPrimary
                    classNameWrap="!w-full !items-center !justify-end"
                    classNameButton="flex-center !w-[133px] !h-[37px] !text-[14px] "
                    handleOpenNavbar={handleOpenNavbar}
                />
            </div>
            <div className="flex md:hidden">
                <img
                    src="icons/menu.png"
                    alt="menu-toggle"
                    onClick={() => handleOpenNavbar(true)}
                />
            </div>
            <div
                className={`block sm:hidden z-20 w-full p-[16px] pb-[45px] absolute top-0 left-0 bg-av-white transition-all ease-in-out duration-500 ${
                    isOpenNavbar ? "block" : "hidden h-0"
                }`}
            >
                <div className="flex justify-between items-center mb-[32px]">
                    <Link href="/">
                        <ApplicationLogo
                            src="/images/logo-mobile.png"
                            className="w-20 h-20 fill-current text-gray-500"
                        />
                    </Link>
                    <img
                        src="icons/close.png"
                        alt="menu-close"
                        onClick={() => handleOpenNavbar(false)}
                    />
                </div>
                <NavbarPrimary
                    classNameWrap="flex-col justify-start gap-y-[24px]"
                    classNameLink="!text-av-primary font-bold"
                    classNameButton="flex items-center justify-center w-[143px] h-[47px]"
                    handleOpenNavbar={handleOpenNavbar}
                />
            </div>
            {isOpenNavbar && (
                <div onClick={() => setIsOpenNavbar(false)}>
                    <Overlay className={"block sm:hidden"} />
                </div>
            )}
        </div>
    );
};

export default Navbar;
