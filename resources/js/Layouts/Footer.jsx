import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";

const Footer = () => {
    return (
        <div
            className="bg-av-primary text-av-white px-[15px] py-[24px] md:p-[64px] md:pt-[111px]"
            id="footer"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4">
                <div className="hidden sm:block">
                    <ApplicationLogo className="!w-[166px] !h-auto" />
                    <ul className="flex flex-col font-normal mb-[56px] mt-[24px]">
                        <li className="mb-2">CÔNG TY TNHH AN VIÊN MEMORY</li>
                        <li className="mb-2">
                            Địa chỉ: 45 Đường số 5, KDC Lakeview City, Phường An
                            Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt
                            Nam
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col font-bold gap-[24px] mb-[24px]">
                        <p>Giá dịch vụ</p>
                        <PrimaryButton
                            href={"https://will.anvien.online/login"}
                            className="flex items-center justify-center bg-av-white !font-bold !text-[16px] !text-av-primary w-[125px] h-[47px] md:w-[143px] md:h-[39px]"
                        >
                            Đăng nhập
                        </PrimaryButton>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex flex-col justify-start mb-[24px] gap-y-[24px]">
                        <p className="font-bold">Thông tin liên lạc</p>
                        <p className="font-normal flex">
                            Số điện thoại: <p className="underline">028.6686.5560</p>
                        </p>
                        <p className="font-normal flex">
                            Email CSKH: <p className="underline">cskh@anvien.online</p>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-start font-bold">
                    <Link href="/" className="mb-[24px]">
                        Facebook
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
                <ul className="flex w-full flex-col md:flex-row justify-start items-start mb-[24px] md:mb-3 md:m-0 font-bold gap-[24px]">
                    <li className="mr-[32px]">Điều khoản sử dụng</li>
                    <li>Chính sách bảo mật</li>
                </ul>
                <p className="w-full text-[14px] font-normal text-left md:text-right">
                    © Dịch vụ tưởng niệm và tang lễ trực tuyến An Viên 2023. All
                    rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
