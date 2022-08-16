import React from 'react'

const FeatureBox = (props) => {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt={props.title} />
        </div>
        <div className="s-b-text">
            <h2>{props.file}</h2>
            <p>Lorem ipsum lalalalalalalalalalalalalalalalalalalalalalalalalalla</p>
        </div>
    </div>
  )
}

export default FeatureBox;