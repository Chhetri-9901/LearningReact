import React from "react";
import Sidebar from "./components/Sidebar";
import Weather from "./components/Weather";
import Subscription from "./components/Subscription";

const App = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <Weather></Weather>
        <Subscription></Subscription>
      </div>
    </div>
  );
};

export default App;
