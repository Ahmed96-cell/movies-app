import React from "react";
import { Container } from "react-bootstrap";
import Paginationcom from "./paginationcom";
//import { NavLink } from "react-router-dom";
import Map from "./Map";
const Cardd = (props) => {
  return (
    <React.Fragment>
      <Container className="d-flex justify-content-center align-items-center flex-wrap mt-4">
        {props.movies.lengh === 0 ? (
          <h1>لا يوجد افلام</h1>
        ) : (
          props.movies.map((e) => <Map key={e.id} e={e} />)
        )}
      </Container>
      <Paginationcom pages={props.pages} pageCount={props.pageCount} />
    </React.Fragment>
  );
};

export default Cardd;
