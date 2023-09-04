import React, { useEffect, useState } from 'react';
import All from './All';
import './All.css';

// const dataa = [
//   { id:1, title: "Scholarship one", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:2, title: "Scholarship two", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:3, title: "Scholarship three", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:4, title: "Scholarship four", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:5, title: "Scholarship five", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:6, title: "Scholarship six", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:7, title: "Scholarship seven", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"},
//   { id:8, title: "Scholarship eight", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure", btn : "Read More"}
// ]

const Allscholarships = () => {
  
  const[allData , setAllData] = useState([]);
  useEffect(() => {
    const URL = `http://localhost:9090/scholarship/`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data.scholar);
        setAllData(data.scholar);
      })
      .catch(error => {
        console.log('Error fetching data : ', error)
      });
  }, []);
   
  return (
    <div className='scholar_section'>
        <h1>All the avaliable Scholarships</h1>
        <div className='containerrr'>
          {
            allData.map(card_dataa => {
              return(
                <All title = {card_dataa.title}  des = {card_dataa.des} url = {card_dataa.url}/>
              )})
          }
        </div>
    </div>
  ) 
}

export default Allscholarships;