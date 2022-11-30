import React from "react";

function About (props) {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt=''/>
                
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque qui a, esse necessitatibus nostrum suscipit ut dolorum minima eligendi temporibus earum porro rem, facilis velit quo illo accusantium! Minima tempora nihil blanditiis voluptatibus voluptas?</p>
                <button>{props.button}</button>

            </div>

        </div>
    )
}

export default About