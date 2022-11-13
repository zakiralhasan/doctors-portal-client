import React from "react";

const StartButton = ({ children }) => {
  return (
    <div>
      <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] rounded-md text-white font-bold p-4">
        {children}
      </button>
    </div>
  );
};

export default StartButton;
