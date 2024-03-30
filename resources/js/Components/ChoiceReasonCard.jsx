import { breakWord } from "@/Utils";
import TitleCommon from "./TitleCommon";

export default function ChoiceReasonCard({ reason }) {
    return (
        <div className="flex flex-col px-[24px] py-[40px] bg-white rounded-lg shadow-lg">
            <div className="w-full h-[160px] bg-av-bg-card rounded-[20px]">
                <img src={reason.image} alt="logo-av" className="w-full h-full object-contain"/>
            </div>
            <TitleCommon className="mt-[24px] mb-[12px] text-[24px]">{reason.title}</TitleCommon>
            <p className="text-[16px] font-normal text-left text-av-black">{breakWord(reason.description, true)}</p>
        </div>
    );
}
