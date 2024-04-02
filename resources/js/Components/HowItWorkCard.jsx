import TitleCommon from "./TitleCommon";

export default function HowItWorkCard({ step }) {
    return (
        <div
            className={`relative flex flex-col justify-between rounded-[24px] p-6 mb-4 ${step.bgColor}`}
        >
            <div>
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-av-black">
                    <img src={step.icon} alt="chat-icon" />
                </div>
                <div className="flex flex-col justify-start items-center mb-[20px]">
                    <TitleCommon className="w-full mt-[20px] mb-[14px] leading-[24px] !text-[25px]">
                        {step.title}
                    </TitleCommon>
                    <h6 className="font-normal leading-[22px] text-av-black mt-[20px]">
                        {step.description}
                    </h6>
                </div>
            </div>
            <div className="flex justify-end">
                <div className="w-[36px] h-[36px] flex items-center justify-center border-[1px] border-av-black rounded-full bg-gradient">
                    <p className="text-[16px] text-av-black">{step.id}</p>
                </div>
            </div>
        </div>
    );
}
