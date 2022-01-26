import React, { useState } from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import { EyeOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./AdminList.css";
import CreatorRequest from "./CreatorRequest";
import PaginatedItems from "./PaginatedItems";
import creator_list from "./creator_list";
export default function ListCreator() {
  const [num, setNum] = useState(1);
  var number = 1;
  return (
    <div>
      <Header style={{ textAlign: "center" }}>
        <Row className="my-4">
          <Col xl={11} md={12} lg={12} sm={12} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <Card
                  style={{
                    margin: -17,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: "#f5f2f2",
                    color: "blue",
                    fontWeight: "bold",
                  }}
                >
                  <Row>
                    <Col
                      xl={10}
                      md={9}
                      lg={9}
                      sm={7}
                      xs={7}
                      style={{
                        marginTop: 10,
                        marginLeft: 20,
                        fontSize: 17,
                      }}
                    >
                      List of Requests
                    </Col>
                  </Row>
                </Card>
              </Card.Body>
              <Row className="mx-2 my-4">
                <Col style={{ overflowX: "auto" }}>
                  <CreatorRequest />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Header>
    </div>
  );
}
