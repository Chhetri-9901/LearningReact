import React from 'react'
import Card from './Card'

const RightContent = () => {
    let cardContent = [
        {
            image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem ONE ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, hic.",
            color: "red"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem TWO ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, hic.",
            color: "royalblue"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem THREE ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, hic.",
            color: "pink"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem FOUR ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, hic.",
            color: "skyblue"

        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem FIVE ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, hic.",
            color: "orange"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Lorem SIX ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, hic.",
            color: "lightgreen"
        }
    ];
    return (
        <div id='card-container' className='overflow-x-scroll flex gap-4'>
            {cardContent.map(function (el, index) {
                return (
                    < div key={index} className='w-2/3' >
                        < Card image={el.image} text={el.text} cardIndex={index} colorValue={el.color} />
                    </div >
                );
            })
            }
        </div>
    );
}

export default RightContent