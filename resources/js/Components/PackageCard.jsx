import TitleCommon from "./TitleCommon";
import SubTitleCommon from "./SubTitleCommon";
import PrimaryButton from "./PrimaryButton";

export default function PackageCard({ pk }) {
    return (
        <div
            className={`flex flex-col justify-between p-[40px] bg-white border-[1px] border-av-border rounded ${
                pk.isHighlight ? "scale-100 md:scale-105 shadow-lg" : ""
            }`}
        >
            <div>
            <SubTitleCommon className="mt-0">{pk.name}</SubTitleCommon>
            <div className="flex justify-start items-center">
                <TitleCommon className="mt-[8px] mb-[20px] text-[48px] -tracking-tight block">
                    {pk.price === 0 ? "Miễn phí" : `$${pk.price}`}
                </TitleCommon>
                <h6 className="w-fit text-[20px] text-av-light font-normal">
                    {pk.unit ? `/${pk.unit}` : ""}
                </h6>
            </div>

            <div className="py-[20px] border-t-[1px] border-t-av-border">
                <ul className="list-none">
                    {pk.features.map((feature, index) => (
                        <li key={index} className={`flex first:mt-0 mt-[12px] ${feature.disable ? 'grayscale' : ''}`}>
                            <div className="mr-[5px]">
                                <img src="icons/check.png" alt="has-feature" />
                            </div>
                            <p className="text-av-black">{feature.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            <PrimaryButton
                href={"https://will.anvien.online/"}
                className={`w-full self-end ${pk.price !== 0 ? 'disable' : ''}`}
            >
                {pk.price === 0 ? 'Viết di chúc ngay' : 'Sắp ra mắt'}
            </PrimaryButton>
        </div>
    );
}
