import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Map = ({ e }) => {
  return (
    <>
      <Col md={4} lg={3} className="p-2 col-6">
        <NavLink to={`movie/${e.id}`}>
          <Card
            style={{
              borderRadius: "15px",
              height: "375px",
            }}
            className="col-card"
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
              alt="Card Image"
              style={{ height: "100%", width: "100%", borderRadius: "15px" }}
            />
            <Card.ImgOverlay className="card-hover">
              <p>اسم الفيلم: {e.original_title}</p>
              <p>تاريخ الاصدار: {e.release_date}</p>
              <p>عدد المقيمون: {e.vote_count}</p>
              <p>التقييم: {e.vote_average}</p>
            </Card.ImgOverlay>
          </Card>
        </NavLink>
      </Col>
    </>
  );
};
export default Map;
