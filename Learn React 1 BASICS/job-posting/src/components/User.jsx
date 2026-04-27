import React from 'react'
import Card from './Card';

const User = () => {
    // const arr = [10, 20, 30];
    const arrDetails = [
        {
            name: "Naina",
            age: 10,
            role: 'BE developer'

        }, {
            name: "Anmol",
            age: 7,
            role: "UI developer"
        }, {
            name: "Shivani",
            age: 18,
            role: "Manager"
        }];

    return (

        arrDetails.map(function (el, index) {
            console.log(index);
            return (<div key={index}>
                <Card name={el.name} role={el.role} />
            </div>)

        })
    )
}

export default User