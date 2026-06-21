import React, { useState } from "react";
import compressArrow from "../assets/arrows.png";
import expandArrow from "../assets/next.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  function getTime() {
    let hours = new Date().getHours();
    if(hours >=0 && hours <12) {
      return("Good morning");
    }
    else if(hours >=12 && hours <5) {
      return ("Good afternoon");
    }
    else {
      return ("Good evening");
    }
  }

  if (!isOpen) {
    return (
      <div className="w-2/16 h-[100vh] bg-[var(--dark-blue)] px-6 py-8 sidebar">
        <div className="flex justify-between gap-4 items-center min-h-10">
          <h1 className="text-white text-xl">Life OS</h1>
          <button
            type="button"
            className="text-white font-semibold text-lg cursor-pointer close w-[100%] max-w-8"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <img src={expandArrow} alt="expand side bar" className="w-[100%]" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-2/8 h-[100vh] bg-[var(--dark-blue)] px-6 py-8 sidebar flex flex-col justify-between">
      <div className="flex justify-between items-center min-h-10">
        <h1 className="text-white text-xl">Life OS</h1>
        <button
          type="button"
          className="text-white font-semibold text-lg cursor-pointer close"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img
            src={compressArrow}
            alt="compress side bar"
            className="w-full max-w-[40px]"
          />
        </button>
      </div>

      <div>
        <p className="text-2xl font-bold text-zinc-50">{getTime()}</p>
      </div>
    </div>
  );
};

export default Sidebar;
