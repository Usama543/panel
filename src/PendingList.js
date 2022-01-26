import React from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CreatedPageList from "./CreatedPageList";
export default function PendingList() {
  return (
    <div>
      <Header>
        <Row className="my-5">
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
                      Pending
                    </Col>
                  </Row>
                </Card>
              </Card.Body>
              <Row className="mx-2 my-4">
                <Col className="scroll" style={{ overflowX: "auto" }}>
                  <table className=" table table-bordered" border="1px">
                    <tbody>
                      <CreatedPageList />
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Header>
    </div>
  );
}
