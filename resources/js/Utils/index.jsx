export const breakWord = (description, isEnterLine = false) => {
    const totalLine = description
    .split("<br />")
    return totalLine.map((paragraph, index) => <p className={(isEnterLine && index < totalLine?.length - 1) ? "mb-[10px]" : "mb-0"} key={index}>{paragraph}</p>);
};
