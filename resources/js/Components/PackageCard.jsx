import TitleCommon from "./TitleCommon";
import SubTitleCommon from "./SubTitleCommon";
import PrimaryButton from "./PrimaryButton";

export default function PackageCard({ _package }) {
    return (
        <div className="flex flex-col p-[40px] bg-white border-[1px] border-av-border rounded">
            <SubTitleCommon className="mt-0">Di chúc An Viên</SubTitleCommon>
            <TitleCommon className="mt-[8px] mb-[20px] text-[48px] -tracking-tight">
                Free
            </TitleCommon>
            <div className="py-[20px] border-t-[1px] border-t-av-border">
                <ul className="list-none">
                    <li className="flex">
                        <div className="mr-[5px]">
                            <img src="icons/check.png" alt="has-feature" />
                        </div>
                        <p className="text-av-black">Complete Documentation</p>
                    </li>
                    <li className="flex mt-[12px]">
                        <div className="mr-[5px]">
                            <img src="icons/check.png" alt="has-feature" />
                        </div>
                        <p className="text-av-black">
                            Working Materials in Figma
                        </p>
                    </li>
                    <li className="flex mt-[12px]">
                        <div className="mr-[5px]">
                            <img src="icons/check.png" alt="has-feature" />
                        </div>
                        <p className="text-av-black">100GB Cloud Storage</p>
                    </li>
                    <li className="flex mt-[12px]">
                        <div className="mr-[5px]">
                            <img src="icons/check.png" alt="has-feature" />
                        </div>
                        <p className="text-av-black">Email Automation</p>
                    </li>
                    <li className="flex mt-[12px]">
                        <div className="mr-[5px]">
                            <img src="icons/check.png" alt="has-feature" />
                        </div>
                        <p className="text-av-black">Premium Support</p>
                    </li>
                </ul>
            </div>
            <PrimaryButton
                href={"https://will.anvien.online/"}
                className="w-full"
            >
                Write Will Now
            </PrimaryButton>
        </div>
    );
}
