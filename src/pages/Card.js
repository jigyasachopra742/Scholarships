import React from 'react'
import "./Card.css"
import img1 from '../assests/GovernmentImage.png';
import img2 from '../assests/PrivateImage.png';
import img3 from '../assests/InternationalImage.jfif';
import img4 from '../assests/UniversityImage.jpg';
import img5 from '../assests/GirlsImage.png';
import img6 from '../assests/EngineeringImage.png';
import img7 from '../assests/AidImage.png';
import img8 from '../assests/ResearchImage.png';

const Card = (props) => {
  return (
    <>
        <div className="card" style={props.id===1?{background: `url(${img1}`,backgroundRepeat :"no-repeat", backgroundSize: "80%", backgroundPosition:"center center"}:props.id===2?{background: `url(${img2}`, backgroundPosition:"center center",backgroundSize: "65%", backgroundRepeat :"no-repeat"}:
                props.id===3?{background: `url(${img3}`, backgroundPosition:"center center",backgroundSize: "105%", backgroundRepeat :"no-repeat"}:props.id===4?{background: `url(${img4}`, backgroundPosition:"center center",backgroundSize: "110%", backgroundRepeat :"no-repeat"}:props.id===5?{background: `url(${img5}`, backgroundPosition:"center center",backgroundSize: "100%", backgroundRepeat :"no-repeat"}:
                  props.id===6?{background: `url(${img6}`, backgroundPosition:"center center",backgroundSize: "100%", backgroundRepeat :"no-repeat"}:props.id===7?{background: `url(${img7}`, backgroundPosition:"center center",backgroundSize: "100%", backgroundRepeat :"no-repeat"}:
                  props.id===8?{background: `url(${img8}`, backgroundPosition:"center center",backgroundSize: "100%", backgroundRepeat :"no-repeat"}:{}}>
            {/* <img src={img1} alt='not found'></img> */}
            <h3 style={{color:"maroon"}}>{props.title}</h3>
            <p>{props.category}</p>
        </div>
    </>
  )
}

export default Card