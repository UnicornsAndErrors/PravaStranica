import React from 'react'

const About = (props) => {
  return (
    <div id="about">
        <div className="about-image">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum lalalalalalalalalalalalalal</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About