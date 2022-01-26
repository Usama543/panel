import React from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminList.css";
import AcceptedPageList from "./AcceptedPageList";
export default function AcceptRequest() {
  return (
    <div>
      <Header>
        <div
          style={{
            color: "blue",
            fontSize: "200%",
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Accepted Request
        </div>
        <Row className="my-4">
          <Col xl={11} md={12} lg={12} sm={12} xs={12}>
            <Card className="shadow">
              <Row className="mx-2 my-4">
                <Col style={{ overflowX: "scroll" }}>
                  <table className=" table table-bordered" border="1px">
                    <AcceptedPageList />
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
