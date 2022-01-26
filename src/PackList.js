import React from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PackPage from "./PackPage";
export default function PackList() {
  return (
    <div>
      <Header>
        <Row className="my-4">
          <Col xl={12} md={12} lg={12} sm={12} xs={12}>
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
                      Pack Details
                    </Col>
                  </Row>
                </Card>
              </Card.Body>
              <Col style={{ overflowX: "auto" }}>
                <table class=" table  table-bordered" border="1px">
                  <PackPage />
                </table>
              </Col>
            </Card>
          </Col>
        </Row>
      </Header>
    </div>
  );
}
