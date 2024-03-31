import React, { useState } from "react";

const AccordionFaq = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="pb-[32px] pt-[24px] border-b-2 last:border-b-0 border-av-border">
            <div
                className="flex justify-between mb-[8px] cursor-pointer"
                onClick={() => setIsActive(!isActive)}
            >
                <div className="text-[18px] leading-[28px] font-medium">
                    {question}
                </div>
                <div className="ml-[24px]">
                    {isActive ? (
                        <img
                            src="icons/close-circle.png"
                            alt="close-accordion"
                        />
                    ) : (
                        <img src="icons/open-circle.png" alt="open-accordion" />
                    )}
                </div>
            </div>
            <p className={`text-av-light pr-[48px] transition-all ease-in-out duration-500 ${isActive ? 'opacity-1 max-h-[300px]' : 'opacity-0 max-h-0'}`}>{answer}</p>
        </div>
    );
};

export default AccordionFaq;
