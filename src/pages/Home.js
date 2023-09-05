import React from 'react'
import BannerImage from "../assests/boy-photo.png"
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
  { id: 7, title: 'Card 7', category: 'category7' },
  { id: 8, title: 'Card 8', category: 'category8' },
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
            <h2>It's not just a Scholarship website It's free scholarship</h2>
              <p>Lorem ipsum dolor sit amet. Qui temporibus autem vel dolorum Quis 
                ea molestiae molestiae est autem amet sit numquam cumque quo corrupti 
                deserunt qui doloremque error. Nam architecto rerum ut adipisci laborum 
                At voluptatibus consequatur cum culpa suscipit et explicabo tempore. 
                Et dolores repudiandae eum fuga ipsum est similique nihil qui 
                reprehenderit illo ut veritatis veritatis vel fugiat inventore 
                et rerum corrupti.
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