import React from 'react'

const App = () => {
  localStorage.setItem("username", "VC");
  localStorage.setItem("email", "example@gamil.com");
  localStorage.setItem("test", "etest");

  console.log(localStorage.getItem("username"));
  console.log(localStorage.getItem("email"));

  localStorage.removeItem("test");

  // localStorage.clear();

  const dataValue = {
    newName: "New VC",
    newEmail: "newexample@gamil.com",
    newTest: "newetest"
  }

  // localStorage.setItem("newValues", dataValue);
  localStorage.setItem("newValues", JSON.stringify(dataValue));
  console.log(localStorage.getItem("newValues"));
  console.log(typeof (localStorage.getItem("newValues")));

  console.log(JSON.parse(localStorage.getItem("newValues")));
  console.log(typeof (JSON.parse(localStorage.getItem("newValues"))));


  return (
    <div>App</div>
  )
}

export default App