import React from 'react'

const banner = (props) => {
    console.log(props.user);
    return (
        <div className="banner">
            <p>Welcome to react learning.</p>
            <p>My name is {props.user} and I am 25 years old.</p>
        </div>
    )
}

export default banner