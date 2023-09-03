import React from 'react'
import "./Scholarship_Card.css";

const Scholarship_Card = ({title, category,url,des}) => {
  return (
        <div className='category-cardd'>
            <h2>{title}</h2>
            <h3>{des}</h3>
            <h2>{category}</h2>
            {/* <h3>{url}</h3> */}
            <a href={url}>Link</a>
        </div>
    
  )
}

export default Scholarship_Card;