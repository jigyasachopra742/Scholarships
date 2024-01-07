import React, { useEffect, useState } from 'react';
import All from './All';
import './All.css';
import Pagination from './Pagination';

const Allscholarships = () => {
  const[allData , setAllData] = useState([]);
  const[currentPage, setCurrentPage] = useState(0);
  

  useEffect(() => {
    const URL = `http://scholarship-env.eba-h5npp4q2.us-east-1.elasticbeanstalk.com/scholarship/page?pageNumber=${currentPage}`;
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
          <Pagination totalPosts = {allData} setCurrentPage={setCurrentPage} currentPage={currentPage}/>       
    </div>
  ) 
}

export default Allscholarships;