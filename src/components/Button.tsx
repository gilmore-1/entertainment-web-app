import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="w-full p-3 bg-red-600 rounded font-outfit text-sm font-medium hover:bg-red-700 transition duration-300"
      onClick={onClick}
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
