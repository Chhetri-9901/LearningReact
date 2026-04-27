import React from "react";
import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className=" w-1/3 text-white flex flex-col justify-between p-5 overflow-clip">
      <div>
        <h3 className="text-6xl font-bold mb-5 leading-[1.1]">Prospective <br /> Customer <br />  Appreciation</h3>
        <p className="text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos sit ipsa nostrum, accusantium vero eveniet facere.
        </p>
      </div>
      <div className="text-3xl">
        <ArrowUpRight size={60} />
      </div>
    </div>
  );
};

export default LeftContent;
