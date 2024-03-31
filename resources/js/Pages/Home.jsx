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
            title: "Easy & Intuitive",
            description: `Anyone can easily write An Vien's will online in just 20 minutes.<br /> With AI assistant, you can complete your will just by talking to AI. (Expected to launch in May)`,
            image: "/images/choice_reason_1.png",
        },
        {
            id: 2,
            title: "Legally Available",
            description:
                "An Vien will will be consulted and executed to fully meet the legal requirements and be protected by law.  If you need help from a lawyer, click on Lawyer Services.<br />An Vien's partner lawyers draft wills and provide legal services. (Slated to launch in April)",
            image: "/images/choice_reason_2.png",
        },
        {
            id: 3,
            title: "Technology Upgrade",
            description:
                "An Vien's will is protected by strong security and anti-tampering technology.<br />Online Wills is a system that recognizes ownership of a will through blockchain and releases it as an NFT, allowing users to write stable wills forever. (Expected to launch in May)",
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
                    name: "1 will",
                    disable: false,
                },
                {
                    name: "Free forever",
                    disable: false,
                },
                {
                    name: "Up to 3 beneficiaries",
                    disable: false,
                },
                {
                    name: "Up to $100,000 in assets",
                    disable: true,
                },
                {
                    name: "No lawyer required",
                    disable: true,
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
                    name: "1 will",
                    disable: false,
                },
                {
                    name: "Free forever",
                    disable: false,
                },
                {
                    name: "Up to 3 beneficiaries",
                    disable: false,
                },
                {
                    name: "Up to $100,000 in assets",
                    disable: false,
                },
                {
                    name: "No lawyer required",
                    disable: true,
                },
                {
                    name: "Lawyer consultation included",
                    disable: true,
                },
            ],
            isHighlight: true,
        },
        {
            id: 3,
            name: "Di chúc An Viên NFT",
            price: 100,
            unit: "phiên tư vấn",
            features: [
                {
                    name: "1 will",
                    disable: false,
                },
                {
                    name: "Free forever",
                    disable: false,
                },
                {
                    name: "Up to 3 beneficiaries",
                    disable: false,
                },
                {
                    name: "Up to $100,000 in assets",
                    disable: false,
                },
                {
                    name: "No lawyer required",
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
            title: "Answer our simple questions",
            description:
                "Our online journey makes writing a will quick and easy. You can do it from the comfort of your own home in just 15 minutes.",
        },
        {
            id: 2,
            icon: "/icons/person_check.png",
            bgColor: "bg-av-bg-step-2",
            title: "Get it approved by our specialists",
            description:
                "Our online will writing service includes specialist checking to make sure your wishes are clear – and it only takes up to 5 days.",
        },
        {
            id: 3,
            icon: "/icons/blockchain.png",
            bgColor: "bg-av-bg-step-3",
            title: "Digitalize Authorized with NFT Tech",
            description:
                "After writing a will and getting it checked by our specialists, you need to print and sign it in front of two witnesses to make it legally binding. Download your will to print at home, or we can print it for you.",
        },
    ]);

    const [faqs] = useState([
        {
            id: 1,
            question: "How does An Vien's online will service work?",
            answer: "Our online will writing service allows you to easily create your will from the comfort of your own home. You simply answer",
        },
        {
            id:2,
            question: "How much does An Vien's online will service cost?",
            answer: "Our basic online will writing service is completely free. You can create one will with up to 3 beneficiaries and assets up to $100,000 value",
        },
        {
            id:3,
            question: "Can I include special requests in my will?",
            answer: "Yes, you can include any special requests in the 'Message to loved ones' section of your will",
        },
        {
            id:4,
            question: "Can I change the beneficiaries of my will?",
            answer: "Yes, you can change the beneficiaries of your will at any time for free using our online service",
        },
        {
            id:5,
            question: "Do I need witnesses to sign my will?",
            answer: "Yes, for your will to be legally valid, you need to sign it in the presence"
        }
    ])
    return (
        <div className="flex flex-col px-[16px] xl:p-0">
            {/* Hero */}
            <div className="w-full flex flex-col md:flex-row items-center py-[20px] md:py-[80px] ">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col">
                        <TitleCommon>
                            Write Your Will for Free <br /> & Easily with An
                            Vien
                        </TitleCommon>

                        <h6 className="text-[20px] text-av-light font-normal mb-[40px] md:mb-[80px] leading-[32px]">
                            Write Your Will for Free & Easily with An Vien.{" "}
                            <br /> Easily create an online will with strong
                            legal effect with the click of a button. An vien
                            provide personalized online will service to everyone
                            in Vietnam.
                        </h6>
                    </div>
                    <div className="flex pt-[20px] border-t-[1px] border-t-av-border">
                        <PrimaryButton href={"https://will.anvien.online/"}>
                            Start My Will
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
                                Watch Tutorial
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
                    Lorem ipsum dolor
                </SubTitleCommon>
                <TitleCommon className="w-full text-center mt-[8px]">
                    Why An Vien Will?
                </TitleCommon>
                <h6 className="font-normal leading-[22px] text-center text-av-black mt-[20px]">
                    Lorem ipsum dolor sit amet consectetur. Cursus quis morbi
                    ornare suscipit ultrices lorem malesuada tellus fusce.
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
                        Lorem ipsum dolor
                    </SubTitleCommon>
                    <TitleCommon className="w-full text-left mt-[8px]">
                        I'm just a normal person. Do I need a will?
                    </TitleCommon>
                    <PrimaryButton
                        href={"https://will.anvien.online/"}
                        className="w-fit px-[70px] py-[16px]"
                    >
                        Start My Will
                    </PrimaryButton>
                    <p className="text-[16px] leading-[26px] font-normal text-left text-av-black border-t border-t-av-border pt-[20px] mt-[40px] md:mt-[80px]">
                        It doesn't matter if you're young or old, rich or poor,
                        healthy or sick - every parent can benefit from the
                        security of a will. Our easy will allows you to make
                        important decisions, like naming a guardian for your
                        little ones. If parents know best, doesn't it make sense
                        to put your wisdom in writing? Learn more here.
                    </p>
                </div>
            </ContainerLandingPage>

            {/* Pricing & Plan */}
            <ContainerLandingPage className="items-center">
                <SubTitleCommon className="text-center">
                    Pricing & Plan
                </SubTitleCommon>
                <TitleCommon className="w-full md:max-w-[686px] text-center mt-[8px] text-[52px]">
                    Choose a plan that suits for your need
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
                    How it work
                </SubTitleCommon>
                <TitleCommon className="w-full text-center mt-[8px] text-[52px] mb-[40px] md:mb-0">
                    How to write a Will online?
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
                <SubTitleCommon className="text-center">FAQs</SubTitleCommon>
                <TitleCommon className="w-full text-center mt-[8px] text-[52px] mb-[40px]">
                    Frequently asked questions
                </TitleCommon>
                <div className="w-full px-0 md:px-[113px] lg:px-[216px]">
                    {faqs.map(faq => (
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
