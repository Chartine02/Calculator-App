import React from "react";

const Button = ({ text, bg, span, onClick }) => {
  return (
    <button
      className={`w-24 h-28 border text-4xl ${
        bg ? `bg-${bg} bg-orange-400 text-white` : "bg-white text-black"
      } border-black  ${span ? "col-span-2 w-full" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
