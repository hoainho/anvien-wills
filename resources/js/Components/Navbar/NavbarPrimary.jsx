import React, { useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

const NavbarPrimary = ({
    classNameWrap = "",
    classNameLink = "",
    classNameButton = "",
    handleOpenNavbar = () => {},
}) => {
    const [menu] = useState([
        {
            name: "Hướng dẫn",
            href: "/",
            ref: "guide",
        },
        {
            name: "Giá dịch vụ",
            href: "/",
            ref: "pricing",
        },
        {
            name: "Thông tin liên lạc",
            href: "/",
            ref: "footer",
        },
    ]);

    const handleScroll = (id) => {
        const pricingElm = document.getElementById(id);
        window.scrollTo({
            top: pricingElm.offsetTop,
            behavior: "smooth",
        });
    };
    const handleLink = (ref) => {
        handleOpenNavbar(false);
        handleScroll(ref);
    };
    return (
        <ul className={`flex ${classNameWrap}`}>
            {menu.map((item, index) => (
                <li
                    key={item.name + index}
                    className={`text-av-white mr-[32px] hover:text-av-primary cursor-pointer ${
                        index === 0
                            ? "text-av-disabled hover:text-av-disabled select-none !cursor-default hidden md:block"
                            : ""
                    } ${classNameLink}`}
                    onClick={() => handleLink(item.ref)}
                >
                    {item.name}
                </li>
            ))}
            <PrimaryButton
                href={"https://will.anvien.online/login"}
                className={`px-[32px] py-[10px] ${classNameButton}`}
            >
                Đăng nhập
            </PrimaryButton>
        </ul>
    );
};

export default NavbarPrimary;
