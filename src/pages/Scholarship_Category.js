import React, { useEffect, useState } from 'react'
import Scholarship_Card from './Scholarship_Card';
// import EmployeeService from './utility/Axios';
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
    const apiUrl = `http://localhost:9090/scholarship/${category}`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data.scholar);
        setScholarships(data.scholar);
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
            title={scholar.title}
            des={scholar.des}
            category={scholar.category}
            url={scholar.url}
          />
        ))}
      </div>
    </>
  );
};


/*const Scholarship_Category = ({ category }) => 
{
const API_URL = `http://localhost:9090/scholarship/${category}`;

const [scholarships, setScholarships] = useState([]);
    
 function getData() 
    {
        const res = fetch(API_URL, {
            method: 'GET',
            mode: 'cors',

        }).then(()=>{
             let data=  res.json();
        console.log(data.scholar);
        setScholarships(data);
        })
        // let data=  res.json();
        // console.log(data.scholar);
        // setScholarships(data);
    }

useEffect(() => {  
    getData();
  }, [category]);
  
  return (
    <>
    <h1>{category} scholarships</h1>
     <div className='containerr'>
        {scholarships.map(scholar1 => (
          <Scholarship_Card
            id={scholar1.id}
            title={scholar1.title}
            des={scholar1.des}
            category={scholar1.category}
            url={scholar1.url}
          />
        ))}
      </div>
    </>
  );
};
*/
export default Scholarship_Category;
// export default Scholarship_Category;