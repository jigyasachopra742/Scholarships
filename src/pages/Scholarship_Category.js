import React, { useEffect, useState } from 'react'
import Scholarship_Card from './Scholarship_Card';
import "./Scholarship.css";

// //dummy data
// const scholarshipData = [
//   { id: 1, title: 'Vidyadhan Scholarship', category: 'government'},
//   { id: 2, title: 'IIT university Ignite Scholarship', category: 'government'},
//   { id: 3, title: 'IIuuT university Ignite Scholarship', category: 'international' },
//   { id: 4, title: 'Vidyadhan Scholarship', category: 'government'},
//   { id: 5, title: 'IIT university Ignite Scholarship', category: 'international'},
//   { id: 6, title: 'IIuuT university Ignite Scholarship', category: 'international' },
//   { id: 7, title: 'Vidyadhan Scholarship', category: 'government'},
//   { id: 8, title: 'IIT university Ignite Scholarship', category: 'international'},
//   { id: 9, title: 'IIuuT university Ignite Scholarship', category: 'government' },
// ];

//filtering out the data on the basis of category
const Scholarship_Category = ({ category }) => {
  const [scholarships, setScholarships] = useState([]);
  
  useEffect(() => {  
    const apiUrl = '';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setScholarships(data);
      })
      .catch(error => {
        console.log('Error fetching data : ', error)
      });
  }, [category]);
  
  return (
    <>
    <h1>{category} scholarships</h1>
     <div className='containerr'>
        {scholarships.map(scholar => (
          <Scholarship_Card
            key={scholar.id}
            id={scholar.id}
            title={scholar.title}
            category={scholar.category}
          />
        ))}
      </div>
    </>
  );
};

export default Scholarship_Category;