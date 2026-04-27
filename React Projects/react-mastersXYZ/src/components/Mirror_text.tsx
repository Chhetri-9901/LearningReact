import React, { useState } from "react";

const Mirror_text = () => {
  const [value, setValue] = useState("Waiting for input...")
  const [valueCount, setValueCount] = useState(0)
  function typing(e:any) {
    setValue(e.target.value);
    setValueCount((e.target.value).length); 
  }
  return <div className="max-w-xl w-100% mt-4 border-white p-4 flex flex-col justify-center ml-auto mr-auto bg-gray-700">
    <input 
      name="enter value" 
      type="text" 
      placeholder="Enter your text" 
      className="outline-1 px-4 py-2"
      onChange={(e)=>{typing(e)}}
    >

    </input>
    <div className="mt-2 bg-gray-300 p-3 rounded-2xl">
    <p className="text-black font-bold">MIRRORED TEXT.</p>
    <p className="text-gray-800 font-bold">{valueCount} characters</p>
    <p className="text-gray-700 italic wrap-break-word">{value}</p>
    </div>

  </div>;
};

export default Mirror_text;
