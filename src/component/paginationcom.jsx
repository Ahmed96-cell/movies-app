import React from "react";
import ReactPaginate from "react-paginate";
const Paginationcom = (props) => {
  const handlePageClick = (data) => {
    props.pages(data.selected + 1);
  };
  const pageCount = props.pageCount;
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="pagination justify-content-center p-3"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

export default Paginationcom;
