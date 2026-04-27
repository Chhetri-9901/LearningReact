import React from 'react'

const Dark = (props) => {

    function changeTheme(){
        props.setTheme("Dark") ;
    } 

  return (
    <div>
        <h3>You are currently in {props.theme} mode</h3>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}


export default Dark