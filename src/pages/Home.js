import React from 'react'
import BannerImage from "../assests/girl-image.png"
import "./Home.css"
import Card from './Card';
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const cardData = [
  { id: 1, title: 'Card 1', category: 'government'},
  { id: 2, title: 'Card 2', category: 'private' },
  { id: 3, title: 'Card 3', category: 'international' },
  { id: 4, title: 'Card 4', category: 'university' },
  { id: 5, title: 'Card 5', category: 'girls' },
  { id: 6, title: 'Card 6', category: 'engineering' },
  { id: 7, title: 'Card 7', category: 'aid' },
  { id: 8, title: 'Card 8', category: 'research' },
];

const Home = () => {
  
  const navigate = useNavigate();
  
  const HandleClick = () => {
    navigate("/form");    
  };

  return (
    <>
    {/* HEADER PART */}
    <div className='content'>
        
        <div className='textBox'>
            <h2>Unlocking Opportunities Empowering <br></br><span>Futures!</span></h2>
              <p>
                Welcome to our scholarship website, your one-stop destination for 
                scholarships categorized to suit your needs. We understand that 
                every student's journey is unique, and so are their financial 
                requirements. <br></br><br></br>That's why we offer an extensive selection of 
                scholarships, organized by categories such as academic excellence
                , STEM, arts, sports, and more. Whether you're a high school senior
                , undergraduate, or graduate student, we have opportunities tailored
                 to your ambitions. Our platform simplifies the search process, 
                 ensuring you find the perfect scholarship to support your educational 
                 dreams. Don't let finances hold you back; explore our diverse 
                 range of scholarships today and invest in your future!
              </p>
        </div>
       
        <div className='imgBox'>
            <img src={BannerImage} alt='photo' className='boy' />
        </div>
    
    </div>
    
    {/* Registration button */}
    <button className="btn btn-1 btn-1c" onClick={HandleClick}>Registration</button>

      {/* CATEGORY OF SCHOLARSHIP */}
    <section className='category'>
            <h1 style={{color: "Black", marginTop: "-3rem", fontSize :"3rem"}} >Category of each  <span style={{color: "Blue"}}>Scholarship</span></h1>
            <h6 style={{color: "darkblue", fontSize :"1rem"}}  >Now you can choose scholarships on the basis of some category</h6>
    </section>

    <div className="card-container">
      {cardData.map(card => {
        return(
          <Link to={`/${card.category}`}>
            <Card title={card.title} content={card.content} category={card.category}/>
          </Link>
        )
        })}
    </div>
  </>
  )
}

export default Home