import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

const Navbar = () => {
    const [menu] = useState([
        {
            name: "Di chúc An Viên là gì?",
            href: "/",
        },
        {
            name: "Hướng dẫn sử dụng",
            href: "/features",
        },
        {
            name: "Câu hỏi thường gặp",
            href: "/features",
        },
        {
            name: "Viết di chúc",
            href: "/features",
        },
        {
            name: "Quản lý di chúc của tôi",
            href: "/features",
        },
    ]);
    return (
        <div className="w-full flex items-center justify-between mb-[32px] bg-av-black px-[16px] py-[12px] md:px-[64px] md:py-[22px]">
            <Link href="/">
                <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </Link>
            <div className="hidden lg:flex">
                <ul className="flex">
                    {menu.map((item, index) => (
                        <li key={index} className="text-av-white mr-[32px] hover:text-av-primary cursor-pointer">
                            {item.name}
                        </li>
                    ))}
                    <li>
                        <PrimaryButton href={"/"} className="px-[32px] py-[10px]">Đăng nhập</PrimaryButton>
                    </li>
                </ul>
            </div>
            <div className="flex lg:hidden">
                <img src="icons/menu.png" alt="menu-toggle" />
            </div>
        </div>
    );
};

export default Navbar;
