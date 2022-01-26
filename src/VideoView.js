import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ViewProfile.css";
import videoUrl from "./videoUrl";
import { BrowserRouter as NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined, StarOutlined } from "@ant-design/icons";
import CsvDetail from "./CsvDetail";
import { useLocation } from "react-router-dom";
import $ from "jquery";

export default function VideoView() {
  const [state, setState] = useState(0);
  const search = useLocation().search;
  const name = new URLSearchParams(search).get("query");
  let value = 0;

  useEffect(() => {
    $("#pics").css({
      overflowY: "hidden",
      overflowX: "hidden",
    });
    if (value > 4) {
      $("#pics").css({
        overflowY: "scroll",
        overflowX: "hidden",
      });
    }
  });
  return (
    <div>
      <Header style={{ fontSize: "50%" }}>
        {videoUrl.map((data) => {
          if (name == data.id) {
            return (
              <Row>
                <Col xl={12} md={12} lg={12} sm={12} xs={12}>
                  <Card
                    className="shadow"
                    style={{
                      marginTop: -20,
                      padding: 30,
                      marginRight: 24,
                      backgroundColor: "white",
                      borderBottom: "none",
                      color: "blue",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderRight: "none",
                      borderLeft: "none",
                    }}
                  >
                    Video Detail
                  </Card>
                </Col>

                <Row>
                  <Col xl={12} md={12} lg={12} sm={12} xs={12}>
                    <Card className="shadow">
                      <Card.Body>
                        <Row style={{ padding: 20 }}>
                          <Col xl={8} md={8} lg={8} sm={8} xs={8}>
                            <Col
                              style={{
                                padding: 10,

                                marginLeft: -16,
                                marginTop: -20,
                                paddingBottom: 20,
                                color: "white",
                                borderRadius: 20,
                              }}
                            >
                              <video
                                style={{
                                  width: "95%",
                                  height: "270%",

                                  marginBottom: 10,
                                  border: 2,
                                  marginTop: 10,
                                  borderRadius: 20,
                                }}
                                controls
                              >
                                <source src={data.url} />
                              </video>
                            </Col>
                          </Col>
                          <Col
                            style={{
                              padding: 10,
                              backgroundColor: "blue",
                              marginLeft: 16,
                              marginTop: -20,
                              paddingBottom: 20,
                              color: "white",
                              borderRadius: 20,
                              border: 1,
                            }}
                          >
                            <div
                              style={{
                                width: "35%",
                                height: "30%",
                                paddingTop: "3%",
                                paddingLeft: "3%",
                                marginLeft: "30%",
                                backgroundColor: "white",
                                marginTop: "10%",
                                borderRadius: "50%",
                              }}
                            >
                              <div
                                style={{
                                  width: "90%",
                                  height: "90%",
                                  paddingTop: "7%",
                                  paddingLeft: "7%",
                                  objectFit: "center",
                                  backgroundColor: "blue",
                                  borderRadius: "50%",
                                }}
                              >
                                <img
                                  src={data.imageUrl}
                                  style={{
                                    width: "90%",
                                    height: "90%",

                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                            </div>
                            <span
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: "100%",
                              }}
                            >
                              <div
                                style={{
                                  marginTop: "5%",
                                  fontSize: "200%",
                                }}
                              >
                                Name
                              </div>
                              <div>0:Followers</div>
                              <div>1:Following</div>
                              <div>Rating</div>
                              <div>Phone Number</div>
                              <div>gmail</div>
                            </span>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Row>
            );
          }
        })}
      </Header>
    </div>
  );
}
