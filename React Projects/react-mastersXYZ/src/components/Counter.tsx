import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("#99a1af");

  function increaseValue() {
    setValue(value + 1);
    setColor("#7bf1a8");
  }

  function decreaseValue() {
    setValue(value - 1);
    setColor("#FF6559");
  }

  function resetValue() {
    setValue(0);
    setColor("#99a1af");
  }

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <p style={{ color }} className="font-extrabold text-8xl">
        {value}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          className="cursor-pointer rounded-4xl bg-pink-300 w-12 h-12 font-bold text-4xl flex justify-center active:scale-110"
          onClick={() => {
            decreaseValue();
          }}
        >
          -
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-4xl bg-white text-black w-24 active:scale-110  hover:bg-gray-200"
          onClick={() => {
            resetValue();
          }}
        >
          Reset
        </button>
        <button
          type="button"
          className="cursor-pointer rounded-4xl bg-green-300 w-12 h-12 font-bold text-4xl flex justify-center active:scale-110"
          onClick={() => {
            increaseValue();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
