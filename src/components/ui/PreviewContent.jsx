import React from "react";
import PropTypes from "prop-types";
import CircleText from "../ui/CircleText"; 

const PreviewContent = ({ heading, description, scrollText, growthPercentage, circleText }) => {
    return (
        <div className="prev-inner-content flex justify-evenly items-center flex-col md:flex-row gap-8">
            <div className="scroll text-center text-vertical">
                <p className="small-text scroll-text font-light">
                    {scrollText} <span className="text-teal-400">&#8594;</span>
                </p>
            </div>
            <div className="content">
                <h3 className="font-light text-center md:text-left text-teal-200">
                    <span className="font-bold text-white">{heading}</span>
                    <br />
                    {description.split("\n").map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h3>
            </div>
            <CircleText text={circleText.text} />
            <div className="growth flex flex-col justify-center items-center lg:justify-start lg:items-start">
                <h4 className="count text-teal-400">{growthPercentage}</h4>
                <p className="text text-center lg:text-start">
                    Our performance is <br />
                    next level
                </p>
            </div>
        </div>
    );
};

PreviewContent.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    scrollText: PropTypes.string.isRequired,
    growthPercentage: PropTypes.string.isRequired,
    circleText: PropTypes.shape({
        text: PropTypes.string.isRequired, 
    }).isRequired,
};

export default PreviewContent;
