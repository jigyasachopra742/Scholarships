import React, { useEffect, useState } from 'react'
import Scholarship_Card from './Scholarship_Card';
// import EmployeeService from './utility/Axios';
import "./Scholarship.css";

//filtering out the data on the basis of category
const Scholarship_Category = ({ category }) => {
  const [scholarships, setScholarships] = useState([]);
  useEffect(() => {  
    const apiUrl = `http://scholarship-env.eba-h5npp4q2.us-east-1.elasticbeanstalk.com/scholarship/${category}`;
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
    <div className='category-section'>
      <h1>{category} scholarships</h1>
        <div className='category-containerr'>
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