import React from 'react'
import './Pagination.css'

const Pagination = ({totalPosts, setCurrentPage, currentPage}) => {
    let pages = [];

    for(let i = 0; i < 10; i++){
        pages.push(i);
    }
    return (
        <>
        <br></br>
    <div className='pagination'>
        {
            pages.map((page, index) => {
                return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active': ''}>{page+1}</button>;
            })
        }
    </div>
    </>
  )
}

export default Pagination