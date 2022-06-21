import React from "react";

const pagination = ({ arrayPages, page, setPage, quantityPages }) => {

  const prevPage = () => {
    if(page - 1 === 0){
      setPage(quantityPages)
    }
    setPage(page - 1)
  }

  const nextPage = () => {
    if(page + 1 > quantityPages){
      setPage(1)
    }
    setPage(page + 1)
  }

  const changePages = n => setPage(n)


  return (
    <div className="pagination-container">
      <div onClick={prevPage} className="pagination-prev-next">&#60;</div>
      <ul className="pagination-number-container">
        {arrayPages?.map((num) => (
          <li key={num} onClick={()=>changePages(num)} className={page === num ? `page-number page-active` : `page-number`}>{num}</li>
        ))}
      </ul>
      <div onClick={nextPage} className="pagination-prev-next">&#62;</div>
    </div>
  );
};

export default pagination;
