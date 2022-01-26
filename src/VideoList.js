import React from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminList.css";
import VideoPageList from "./VideoPageList";
export default function VideoList() {
  return (
    <div>
      <Header>
        <div
          style={{
            color: "blue",
            fontSize: 35,
            fontWeight: "bold",

            marginTop: 10,
            marginBottom: 10,
          }}
        >
          Video
        </div>
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
                      List of Videos
                    </Col>
                  </Row>
                </Card>
              </Card.Body>
              <Row className="mx-2 my-4">
                <Col style={{ overflowX: "auto" }}>
                  <table className=" table table-bordered" border="1px">
                    <VideoPageList />
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
