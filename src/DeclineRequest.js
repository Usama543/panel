import React from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminList.css";
import DeclinePageRequest from "./DeclinePageRequest";
export default function DeclineRequest() {
  return (
    <div>
      <Header>
        <div
          style={{
            color: "blue",
            fontSize: 35,
            fontWeight: "bold",
            fontSize: "200%",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Decline Request
        </div>
        <Row className="my-4">
          <Col xl={11} md={12} lg={12} sm={12} xs={12}>
            <Card className="shadow">
              <Row className="mx-2 my-4">
                <Col style={{ overflowX: "auto" }}>
                  <table className=" table table-bordered" border="1px">
                    <DeclinePageRequest />
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
