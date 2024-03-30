import ApplicationLogo from "@/Components/ApplicationLogo";
import ChoiceReasonCard from "@/Components/ChoiceReasonCard";
import PackageCard from "@/Components/PackageCard";
import PrimaryButton from "@/Components/PrimaryButton";
import SubTitleCommon from "@/Components/SubTitleCommon";
import TitleCommon from "@/Components/TitleCommon";
import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ auth, laravelVersion, phpVersion }) {
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
            <div className="flex flex-col md:py-[80px] my-[20px] md:mt-0">
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
            </div>

            {/* Call to Action */}
            <div className="flex flex-col md:flex-row items-start my-[20px] md:mt-0">
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
            </div>

            <div className="flex flex-col items-center my-[20px] md:mt-0">
                <SubTitleCommon className="text-center">
                    Pricing & Plan
                </SubTitleCommon>
                <TitleCommon className="w-full md:max-w-[686px] text-center mt-[8px] text-[52px]">
                    Choose a plan that suits for your need
                </TitleCommon>
                <PackageCard />
            </div>
        </div>
    );
}
