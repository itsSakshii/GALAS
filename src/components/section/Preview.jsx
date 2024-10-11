import React from "react";
import PreviewContent from "../ui/PreviewContent";

export default function Preview() {
    const heading = "WE STRIVE-To Improve";
    const description = "Your Company And Help\nYour Business Growth";
    const scrollText = "scroll-down";
    const growthPercentage = "19%";

    const circleText = {
        text: "-READY--FOR--FUN-", 
    };

    return (
        <>
            <div className="section-space"></div>
            <section className="preview">
                <div className="preview-inner container mx-auto px-6">
                    <PreviewContent
                        heading={heading}
                        description={description}
                        scrollText={scrollText}
                        growthPercentage={growthPercentage}
                        circleText={circleText} 
                    />
                    <div className="section-space"></div>
                </div>
            </section>
            <div className="section-space"></div>
        </>
    );
}
