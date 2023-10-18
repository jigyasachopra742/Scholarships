import React from 'react'
import "./Scholarship_Card.css";

const Scholarship_Card = ({title,url,des}) => {
  return (
        <div className='category-cardd'>
            <h2>{title}</h2>
            <p>{des}</p>
            
            {/* <h3>{url}</h3> */}
            <button><a href={url}>Read More</a></button>
        </div>
    
  )
}

export default Scholarship_Card;