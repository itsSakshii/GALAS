import PropTypes from "prop-types";

export default function Button({ text }) {
  return (
    <button className="btn font-medium tracking-wide text-black capitalize 
    transition-colors duration-300 transform bg-teal-400 rounded-xl hover:bg-teal-300 
    focus:outline-none inline-block focus:ring focus:ring-black focus:ring-opacity-80 px-4 py-2">
       
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
