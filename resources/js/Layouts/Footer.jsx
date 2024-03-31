import ApplicationLogo from "@/Components/ApplicationLogo";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";

const Footer = () => {
    return (
        <div className="bg-av-primary text-av-white px-[15px] py-[24px] md:p-[64px] md:pt-[111px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4">
                <div className="">
                    <ul className="flex flex-col justify-start font-bold">
                        <li className="mb-[24px]">Thông tin công ty</li>
                        <li className="mb-[24px]">Hướng dẫn sử dụng</li>
                        <li className="mb-[24px]">Câu hỏi thường gặp</li>
                        <li className="mb-[24px]">Tin tức / sự kiện</li>
                    </ul>
                </div>
                <div className="font-bold">
                    <li className="flex items-center justify-start mb-[24px] ">
                        <p>Tạo cáo phó trực tuyến</p>
                        <Link className="cursor-pointer ml-2" href="/">
                            <img src="icons/export.png" alt="link-icon" />
                        </Link>
                    </li>
                    <li className="flex items-center justify-start mb-[24px]">
                        <p>Tìm kiếm dịch vụ tang lễ</p>
                        <Link className="cursor-pointer ml-2" href="/">
                            <img src="icons/export.png" alt="link-icon" />
                        </Link>
                    </li>
                    <li className="flex items-center justify-start mb-[24px]">
                        <p>Vòng hoa tang lễ</p>
                        <Link className="cursor-pointer ml-2" href="/">
                            <img src="icons/export.png" alt="link-icon" />
                        </Link>
                    </li>
                    <li className="flex items-center justify-start mb-[24px]">
                        <p>Đối tác dịch vụ tang lễ</p>
                        <Link className="cursor-pointer ml-2" href="/">
                            <img src="icons/export.png" alt="link-icon" />
                        </Link>
                    </li>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="flex flex-col justify-start mb-[24px]">
                        <p className="font-bold">Cổng chăm sóc khách hàng</p>
                        <p className="font-normal">
                            Số điện thoại: 0000 0000 0000
                        </p>
                        <p className="font-normal">
                            Email CSKH (người dùng): cskh@anvien.online
                        </p>
                        <p className="font-normal">
                            Email CSKH (đối tác): partners@anvien.online
                        </p>
                    </div>
                    <p className="font-bold mb-[24px]">Chính sách khiếu nại</p>
                </div>
                <div className="flex flex-col justify-start font-bold mb-[24px]">
                    <Link href="/" className="mb-[24px]">
                        Facebook
                    </Link>
                    <Link href="/">Instagram</Link>
                </div>
            </div>
            <div className="mb-[64px]">
                <PrimaryButton className="bg-av-white !font-bold !text-[16px] !text-av-primary px-[32px] py-[10px]">
                    Tải ứng dụng
                </PrimaryButton>
            </div>
            <ApplicationLogo className="!w-[166px] !h-auto" />
            <ul className="flex flex-col font-normal mb-[56px] mt-[24px]">
                <li className="mb-2">CÔNG TY TNHH AN VIÊN MEMORY</li>
                <li className="mb-2">
                    Địa chỉ: 45 Đường số 5, KDC Lakeview City, Phường An Phú,
                    Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                </li>
                <li className="mb-2">Hotline: 0000 0000 00</li>
                <li className="mb-2">Email: info@anvien.online</li>
            </ul>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <ul className="flex flex-1 justify-start mb-3 md:m-0">
                    <li className="mr-[32px]">Điều khoản sử dụng</li>
                    <li>Chính sách bảo mật</li>
                </ul>
                <p className="text-[14px] font-normal">
                    © Dịch vụ tưởng niệm và tang lễ trực tuyến An Viên 2023. All
                    rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
