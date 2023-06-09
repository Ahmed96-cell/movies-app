import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";
const Navb = ({ search }) => {
  const onSearch = (word) => {
    search(word);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="p-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search   w-100" style={{ position: "relative" }}>
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => onSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navb;
