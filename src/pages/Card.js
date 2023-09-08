import React from 'react'
import "./Card.css"
import img1 from '../assests/boy-photo.png'
import img2 from '../assests/girl-image.png'
import img3 from '../assests/home-banner-background.png'
const Card = (props) => {
  return (
    <>
        <div className="card" style={props.id===1?{background: `url(${img1}`}:props.id===2?{background: `url(${img2}`}:
                props.id===3?{background: `url(${img3}`}:props.id===4?{background: `url(${img1}`}:props.id===5?{background: `url(${img2}`}:
                  props.id===6?{background: `url(${img3}`}:props.id===7?{background: `url(${img1}`}:
                  props.id===8?{background: `url(${img2}`}:{background: `url(${img3}`,backgroundSize:'covers'}}>
            {/* <img src={img1} alt='not found'></img> */}
            <h3>{props.title}</h3>
            <p>{props.category}</p>
        </div>
    </>
  )
}

export default Card