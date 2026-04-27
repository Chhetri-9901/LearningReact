import React, { useEffect, useState, useRef } from 'react'

const UseEffectWithButtonsDemo = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    const generateHTML = useRef(null)
    // let generateHTML;
    // function findSection() {
    //    generateHTML.current =  document.querySelector('.html-updated');
    //    console.log(generateHTML)
    // }


    useEffect(() => {
        if (generateHTML.current) {
            generateHTML.current.innerHTML =
                `<h3>A changed to ${a} and B changed to ${b}</h3>`
        }
    }, [a, b])
    // let foundSection = setInterval(findSection, 500);
    // if(foundSection) {
    //     clearInterval(foundSection);
    // }
    // generateHTML.innerHTML = `<h3>A changed to ${a} and B changed to ${b}</h3>`

    function aChange() {
        console.log("The vaue of a is changed");
    }

    function bChange() {
        console.log("The vaue of b is changed");
    }

    return (
        <div className='insideUseEffectDemo'>
            <div ref={generateHTML}>
            </div>
            <div className='html-updated'>
                <h3>The value of A is : {a}</h3>
                <h3>The value of B is : {b}</h3>
            </div>
            <button onClick={() => {
                setA(a + 1);
                aChange()
            }}>
                Change A
            </button>
            <button onClick={() => {
                setB(b + 1);
                bChange()
            }} >
                Change B
            </button>
        </div>
    )
}

export default UseEffectWithButtonsDemo