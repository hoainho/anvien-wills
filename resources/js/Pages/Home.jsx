import AccordionFaq from "@/Components/AccordionFAQ";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ChoiceReasonCard from "@/Components/ChoiceReasonCard";
import HowItWorkCard from "@/Components/HowItWorkCard";
import PackageCard from "@/Components/PackageCard";
import PrimaryButton from "@/Components/PrimaryButton";
import SubTitleCommon from "@/Components/SubTitleCommon";
import TitleCommon from "@/Components/TitleCommon";
import ContainerLandingPage from "@/Layouts/Container";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Home() {
    const [willChoiceReason] = useState([
        {
            id: 1,
            title: "Dễ dàng & trực quan",
            description: `Bất cứ ai cũng có thể dễ dàng viết di chúc trực tuyến của An viên chỉ trong 20 phút.<br />Với trợ lý AI, bạn có thể hoàn thành di chúc của mình chỉ bằng cách nói chuyện với AI. (Dự kiến ra mắt vào tháng 5)`,
            image: "/images/choice_reason_1.png",
        },
        {
            id: 2,
            title: "Đầy đủ tính Pháp lý",
            description:
                "Di chúc An Viên sẽ được tư vấn và hiện thực văn bản đáp ứng đầy đủ tính pháp lý và được bảo vệ bởi pháp luật.<br />Nếu bạn cần sự trợ giúp từ luật sư, hãy nhấp vào Dịch vụ Luật sư. Luật sư đối tác của An Viên soạn thảo di chúc và cung cấp dịch vụ pháp lý. (Dự kiến ​​ra mắt vào tháng 4)",
            image: "/images/choice_reason_2.png",
        },
        {
            id: 3,
            title: "Nâng cấp công nghệ",
            description:
                "Di chúc của An viên được bảo vệ bởi công nghệ bảo mật mạnh mẽ và chống giả mạo.<br />Di chúc trực tuyến là một hệ thống công nhận quyền sở hữu di chúc thông qua blockchain và phát hành nó dưới dạng NFT, cho phép người dùng viết di chúc ổn định mãi mãi. (Dự kiến ra mắt vào tháng 5)",
            image: "/images/choice_reason_3.png",
        },
    ]);

    const [packages] = useState([
        {
            id: 1,
            name: "Di chúc An Viên",
            price: 0,
            unit: "",
            features: [
                {
                    name: "Di chúc trực tuyến",
                    disable: false,
                },
                {
                    name: "Chỉnh sửa di chúc bất kỳ lúc nào",
                    disable: false,
                },
                {
                    name: "Để lại di nguyện trong di chúc",
                    disable: false,
                },
            ],
            isHighlight: false,
        },
        {
            id: 2,
            name: "Di chúc An Viên NFT",
            price: 2,
            unit: "tháng",
            features: [
                {
                    name: "Di chúc trực tuyến",
                    disable: false,
                },
                {
                    name: "Phát hành di chúc NFT",
                    disable: false,
                },
                {
                    name: "Sở hữu khóa an toàn & bảo mật",
                    disable: false,
                },
            ],
            isHighlight: true,
        },
        {
            id: 3,
            name: "Dịch vụ Pháp lý An Viên",
            price: 100,
            unit: "phiên tư vấn",
            features: [
                {
                    name: "30 phút tư vấn với luật sư",
                    disable: false,
                },
                {
                    name: "Dịch vụ tư vấn pháp lý với luật sư của An Viên",
                    disable: false,
                },
                {
                    name: "Dịch vụ tư vấn pháp lý liê quan vấn đề thừa kế (chi phí riêng)",
                    disable: false,
                },
                {
                    name: "Tư vấn các dịch vụ pháp lý khác",
                    disable: false,
                },
            ],
            isHighlight: false,
        },
    ]);

    const [howItWorksStep] = useState([
        {
            id: 1,
            icon: "/icons/chat.png",
            bgColor: "bg-av-bg-step-1",
            title: "Trả lời một số câu hỏi thông tin cơ bản",
            description:
                "Hành trình trực tuyến của chúng tôi giúp việc viết di chúc trở nên nhanh chóng và dễ dàng. Bạn có thể làm điều đó một cách thoải mái tại nhà riêng của mình chỉ trong 15 phút.",
        },
        {
            id: 2,
            icon: "/icons/person_check.png",
            bgColor: "bg-av-bg-step-2",
            title: "Nhận được sự tư vấn của các chuyên gia của chúng tôi",
            description:
                "Sau khi viết di chúc và được các chuyên gia của chúng tôi kiểm tra, bạn cần in và ký tên trước mặt hai nhân chứng để đảm bảo tính ràng buộc về mặt pháp lý. Tải di chúc của bạn xuống để in tại nhà hoặc chúng tôi có thể in cho bạn.",
        },
        {
            id: 3,
            icon: "/icons/blockchain.png",
            bgColor: "bg-av-bg-step-3",
            title: "Số hóa được ủy quyền với NFT Tech",
            description:
                "Dịch vụ viết di chúc trực tuyến của chúng tôi bao gồm việc kiểm tra chuyên môn để đảm bảo mong muốn của bạn rõ ràng - và quá trình này chỉ mất tối đa 5 ngày.",
        },
    ]);

    const [faqs] = useState([
        {
            id: 1,
            question: "Dịch vụ di chúc trực tuyến của An Viên có tốn chi phí không?",
            answer: "Hiện tại An Viên đang cung cấp dịch vụ sử dụng và lưu trữ MIỄN PHÍ di chúc trực tuyến, vì vậy sẽ có không có bất kỳ chi phí nào cho việc tạo tài khoản và bắt đầu tạo di chúc trực tuyến của bạn.",
        },
        {
            id: 2,
            question: "Di chúc của tôi có hợp pháp hóa tại nước sở tại?",
            answer: "Hiện tại An Viên đang cung cấp dịch vụ sử dụng và lưu trữ MIỄN PHÍ di chúc trực tuyến, vì vậy sẽ có không có bất kỳ chi phí nào cho việc tạo tài khoản và bắt đầu tạo di chúc trực tuyến của bạn.",
        },
        {
            id: 3,
            question: "Phát hành số hóa di chúc NFT là như thế nào?",
            answer: "Hiện tại An Viên đang cung cấp dịch vụ sử dụng và lưu trữ MIỄN PHÍ di chúc trực tuyến, vì vậy sẽ có không có bất kỳ chi phí nào cho việc tạo tài khoản và bắt đầu tạo di chúc trực tuyến của bạn.",
        },
        {
            id: 4,
            question: "Tôi có thể liên hệ luật sư để tư vấn đề các tài sản thừa kế của mình?",
            answer: "Hiện tại An Viên đang cung cấp dịch vụ sử dụng và lưu trữ MIỄN PHÍ di chúc trực tuyến, vì vậy sẽ có không có bất kỳ chi phí nào cho việc tạo tài khoản và bắt đầu tạo di chúc trực tuyến của bạn.",
        },
        {
            id: 5,
            question: "Sau khi tôi mất thì làm sao đảm bảo được di chúc của tôi được thực hiện đúng?",
            answer: "Hiện tại An Viên đang cung cấp dịch vụ sử dụng và lưu trữ MIỄN PHÍ di chúc trực tuyến, vì vậy sẽ có không có bất kỳ chi phí nào cho việc tạo tài khoản và bắt đầu tạo di chúc trực tuyến của bạn.",
        },
        {
            id: 6,
            question: "Di chúc trực tuyến có được hợp thức hóa ở Việt Nam?",
            answer: "Hiện tại An Viên đang cung cấp dịch vụ sử dụng và lưu trữ MIỄN PHÍ di chúc trực tuyến, vì vậy sẽ có không có bất kỳ chi phí nào cho việc tạo tài khoản và bắt đầu tạo di chúc trực tuyến của bạn.",
        },
    ]);
    return (
        <div className="flex flex-col px-[16px] xl:p-0">
            {/* Hero */}
            <div className="w-full flex flex-col md:flex-row items-center py-[20px] md:py-[80px] ">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col">
                        <TitleCommon>
                            Viết di chúc trực tuyến dễ dàng & miễn phí với An
                            Viên
                        </TitleCommon>

                        <h6 className="text-[20px] text-av-light font-normal mb-[40px] md:mb-[80px] leading-[32px]">
                            Viết di chúc miễn phí và dễ dàng với An Viên. <br />
                            Dễ dàng tạo di chúc trực tuyến có hiệu lực pháp lý
                            mạnh mẽ chỉ bằng một nút bấm. <br />
                            An viên cung cấp dịch vụtrực tuyến được cá nhân hóa
                            cho mọi người ở Việt Nam.
                        </h6>
                    </div>
                    <div className="flex pt-[20px] border-t-[1px] border-t-av-border">
                        <PrimaryButton href={"https://will.anvien.online/"}>
                            Viết di chúc ngay
                        </PrimaryButton>
                        <Link
                            href="/"
                            className="w-1/2 flex items-center justify-center bg-av-semi-light rounded-[8px] py-[16px]"
                        >
                            <div className="w-[24px] h-[24px] mr-[5px]">
                                <img
                                    src="icons/play-circle.png"
                                    alt="logo-av"
                                />
                            </div>
                            <span className="text-center tracking-tight text-[18px] text-center text-av-primary font-semibold leading-[28px]">
                                Xem hướng dẫn
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-left w-full min-w-[343px] md:max-w-[478px] md:ml-[80px] h-auto mt-[40px] md:mt-0 rounded-[20px] overflow-hidden">
                    <img
                        className="w-full h-full"
                        src="images/intro.png"
                        alt="logo-av"
                    />
                </div>
            </div>

            {/* Why An Vien Will? */}
            <ContainerLandingPage>
                <SubTitleCommon className="text-center">
                    Trực tuyến và bảo mật
                </SubTitleCommon>
                <TitleCommon className="w-full text-center mt-[8px]">
                    Tại sao lựa chọn di chúc An Viên?
                </TitleCommon>
                <h6 className="font-normal leading-[22px] text-center text-av-black mt-[20px]">
                    Đổi mới trong cách thức tạo, lưu trữ và hợp thức hoá di chúc
                    trực tuyến
                </h6>

                <div className="grid gap-x-10 gap-y-5 grid-cols-1 md:grid-cols-3 mt-[40px]">
                    {willChoiceReason.map((reason) => (
                        <ChoiceReasonCard key={reason.id} reason={reason} />
                    ))}
                </div>
            </ContainerLandingPage>

            {/* Call to Action */}
            <ContainerLandingPage className="lg:flex-row items-start">
                <div className="w-full md:min-w-[560px] bg-av-bg-card rounded-[20px] md:mr-[120px]">
                    <img
                        src="images/call_to_action.png"
                        alt="CallToAction"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex flex-col justify-start items-start">
                    <SubTitleCommon className="text-left">
                        Di chúc cho mọi đối tượng
                    </SubTitleCommon>
                    <TitleCommon className="w-full text-left mt-[8px]">
                        Đối với một người bình thường, tôi có cần viết di chúc?
                    </TitleCommon>
                    <PrimaryButton
                        href={"https://will.anvien.online/"}
                        className="w-fit px-[70px] py-[16px]"
                    >
                        Viết di chúc ngay
                    </PrimaryButton>
                    <p className="text-[16px] leading-[26px] font-normal text-left text-av-black border-t border-t-av-border pt-[20px] mt-[40px] md:mt-[80px]">
                        Không quan trọng bạn già hay trẻ, giàu hay nghèo, khỏe
                        mạnh hay bệnh tật - mọi bậc cha mẹ đều có thể được hưởng
                        lợi từ sự bảo đảm của di chúc. Ý chí dễ dàng của chúng
                        tôi cho phép bạn đưa ra những quyết định quan trọng,
                        chẳng hạn như chỉ định người giám hộ cho con nhỏ của
                        bạn. Nếu cha mẹ biết rõ nhất, việc viết ra sự khôn ngoan
                        của bạn chẳng phải là điều hợp lý sao? Tim hiểu thêm ở
                        đây.
                    </p>
                </div>
            </ContainerLandingPage>

            {/* Pricing & Plan */}
            <ContainerLandingPage className="items-center">
                <SubTitleCommon className="text-center">
                    Giá dịch vụ
                </SubTitleCommon>
                <TitleCommon className="w-full md:max-w-[686px] text-center mt-[8px] text-[52px]">
                    Chọn một kế hoạch phù hợp với nhu cầu của bạn
                </TitleCommon>
                <div className="w-full grid gap-x-[30px] gap-y-5 grid-cols-1 md:grid-cols-3 mt-[40px]">
                    {packages.map((pk) => (
                        <PackageCard key={pk.id} pk={pk} />
                    ))}
                </div>
            </ContainerLandingPage>

            {/* How it work */}
            <ContainerLandingPage className="items-center">
                <SubTitleCommon className="text-center">
                    Cách thức hoạt động
                </SubTitleCommon>
                <TitleCommon className="w-full text-center mt-[8px] text-[52px] mb-[40px] md:mb-0">
                    Làm thế nào để tạo di chúc trực tuyến?
                </TitleCommon>

                {/* divider */}
                <div className="hidden md:flex relative w-full h-[4px] bg-av-border rounded md:mt-[40px] md:mb-[80px]">
                    <div className="w-[73px] h-[80px] absolute -translate-x-1/2 -top-1/2 left-1/2">
                        <div className="w-full border-t-[6px] border-t-av-primary rounded"></div>
                        <img
                            className="w-full h-full object-contain"
                            src="images/hook.png"
                            alt="hook-icon"
                        />
                    </div>
                </div>

                {/* How it works steps */}
                <div className="grid md:gap-x-[30px] gap-y-5 md:gap-y-0 grid-cols-1 md:grid-cols-3 md:px-[70px]">
                    {howItWorksStep.map((step) => (
                        <HowItWorkCard key={step.id} step={step} />
                    ))}
                </div>
            </ContainerLandingPage>

            {/* Faq */}
            <ContainerLandingPage className="items-center">
                <SubTitleCommon className="text-center">Giải đáp thắc mắc cùng An Viên</SubTitleCommon>
                <TitleCommon className="w-full text-center mt-[8px] text-[52px] mb-[40px]">
                    Câu hỏi thường gặp
                </TitleCommon>
                <div className="w-full px-0 md:px-[113px] lg:px-[216px]">
                    {faqs.map((faq) => (
                        <AccordionFaq
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </ContainerLandingPage>
        </div>
    );
}
