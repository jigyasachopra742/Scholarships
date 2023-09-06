import React, { useEffect, useState } from 'react';
import All from './All';
import './All.css';
import Pagination from './Pagination';

// comment this out afterwards
// const dataa = [
//   { id:1, title: "Scholarship one", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:2, title: "Scholarship two", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:3, title: "Scholarship three", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:4, title: "Scholarship four", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:5, title: "Scholarship five", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:6, title: "Scholarship six", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:7, title: "Scholarship seven", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:8, title: "Scholarship eight", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:9, title: "Scholarship nine", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:10, title: "Scholarship ten", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:11, title: "Scholarship eleven", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"},
//   { id:12, title: "Scholarship twelve", description : "Lorem ipsum dolor sit amet. Ex omnis dicta qui eligendi unde qui voluptatem dolore ab reprehenderit quaerat. Vel praesentium officia est quis inventore aut nostrum soluta aut quae galisum cum eligendi maxime hic temporibus ducimus non dolor iure"}
// ]

const Allscholarships = () => {
  const[allData , setAllData] = useState([]);
  const[currentPage, setCurrentPage] = useState(0);
  

  useEffect(() => {
    const URL = `http://localhost:9090/scholarship/page?pageNumber=${currentPage}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data.scholar);
        setAllData(data.scholar);
      })
      .catch(error => {
        console.log('Error fetching data : ', error)
      });
  }, [currentPage]);
   
  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // console.log("firstPostIndex", firstPostIndex, "lastPostIndex", lastPostIndex);
  
  // const currentPosts = dataa.slice(firstPostIndex, lastPostIndex); //change dataa to allData when fetching data through the API

  return (
    <div className='scholar_section'>
        <h1>All the avaliable Scholarships</h1>
        <div className='containerrr'>
          {
            allData.map(card_dataa => {
              return(
                <All title = {card_dataa.title}  des = {card_dataa.des}/>
              )})
          }
          </div>
          <Pagination totalPosts = {allData} setCurrentPage={setCurrentPage} currentPage={currentPage}/>       
    </div>
  ) 
}

export default Allscholarships;