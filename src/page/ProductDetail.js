import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

function ProductDetail() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let { id } = useParams();
  const [product, setProcudt] = useState(null);
  // console.log(id)
  const getProductDetail = async () => {
    let url = `http://localhost:3005/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProcudt(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []); //배열이 비어있을 때는 함수 실행시 한번만 실행됨.
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (<div className="detail"></div>)(
    <Container>
      <Row>
        <Col className="bg-light border product-img" xs="6">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="bg-light border product-desc" xs="6">
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div className="choice">
            {product?.choice ? "Conscious choice" : ""}
          </div>
          <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>사이즈</DropdownToggle>
              <DropdownMenu>
                {product?.size.map((item) => {
                  return <DropdownItem>{item}</DropdownItem>;
                })}
              </DropdownMenu>
            </Dropdown>
            <Button color="info">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductDetail;
