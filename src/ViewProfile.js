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
import imageUrl from "./imageUrl";
import creator_list from "./creator_list";
export default function ViewProfile() {
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
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          style={{
            marginTop: 30,
            textColor: "white",
            color: "white",
            fontWeight: 900,
          }}
        >
          <button
            id="user"
            style={{
              border: "none",
              paddingLeft: 20,
              paddingRight: 20,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              color: "blue",
              fontWeight: "bold",

              outline: "none !important",
              padding: 10,
            }}
            type="button"
            onClick={() => {
              setState(0);
              $("#user").css({ backgroundColor: "white" });
              $("#csv").css({ backgroundColor: "#f5f2f2" });
              $("#video").css({ backgroundColor: "#f5f2f2" });
            }}
            className="shadow"
          >
            User Detail
          </button>

          <button
            onClick={() => {
              setState(1);
              $("#csv").css({ backgroundColor: "white" });
              $("#user").css({ backgroundColor: "#f5f2f2" });
              $("#video").css({ backgroundColor: "#f5f2f2" });
            }}
            id="csv"
            style={{
              border: "none",
              paddingLeft: 20,
              paddingRight: 20,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              outline: "none !important",
              padding: 10,
              fontWeight: "bold",
              color: "blue",
            }}
            type="button"
          >
            Image
          </button>
          <button
            onClick={() => {
              setState(2);
              $("#video").css({ backgroundColor: "white" });
              $("#user").css({ backgroundColor: "#f5f2f2" });
              $("#csv").css({ backgroundColor: "#f5f2f2" });
            }}
            id="video"
            style={{
              border: "none",
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              outline: "none !important",
              padding: 10,
              paddingLeft: 20,
              paddingRight: 20,
              color: "blue",
              fontWeight: "bold",
            }}
            type="button"
          >
            Videos
          </button>
        </Menu>

        {state === 0 ? (
          <Row>
            <Row>
              <Card
                style={{
                  marginTop: -20,
                  padding: 30,
                  backgroundColor: "#f5f2f2",
                  borderBottom: "none",
                  borderRadius: 20,
                  borderRight: "none",
                  borderLeft: "none",
                }}
              >
                User Detail
              </Card>
            </Row>

            <Row>
              <Col xl={12} md={12} lg={12} sm={12} xs={12}>
                <Card>
                  <Card.Body>
                    {creator_list.map((data, id) => {
                      if (name == data.id) {
                        return (
                          <Row>
                            <Col xl={8} md={8} lg={8} sm={8} xs={8}>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "blue",
                                  marginLeft: 20,

                                  color: "white",
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                }}
                              >
                                <span
                                  style={{
                                    marginRight: "30%",

                                    fontWeight: "bold",
                                  }}
                                >
                                  User Detail
                                </span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "#f5f2f2",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "40%" }}
                                >
                                  user_mode:
                                </span>
                                <span>Public</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "white",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "45%" }}
                                >
                                  Name:
                                </span>
                                <span>{data.name}</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "#f5f2f2",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "50%" }}
                                >
                                  Age:
                                </span>
                                <span>age</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "white",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "45%" }}
                                >
                                  Gender:
                                </span>
                                <span>gender</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "#f5f2f2",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "45%" }}
                                >
                                  Mobile:
                                </span>
                                <span>7291701</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "white",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "40%" }}
                                >
                                  Email:
                                </span>
                                <span>usama@gmail.com</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "#f5f2f2",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "37%" }}
                                >
                                  Personal Status
                                </span>
                                <span>status</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "white",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "45%" }}
                                >
                                  Followers:
                                </span>
                                <span>10</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "#f5f2f2",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "45%" }}
                                >
                                  Following:
                                </span>
                                <span>1</span>
                              </Col>
                              <Col
                                style={{
                                  padding: 10,
                                  backgroundColor: "white",
                                  marginLeft: 20,

                                  color: "gray",
                                }}
                              >
                                <span
                                  className="align"
                                  style={{ marginRight: "45%" }}
                                >
                                  Rating:
                                </span>
                                <span>rating</span>
                              </Col>
                            </Col>
                            <Col>
                              <div className="profile">
                                <img
                                  src={require("./Assets/download.jpg")}
                                  style={{
                                    width: "90%",
                                    height: 120,
                                    marginBottom: 30,
                                    borderRadius: "50%",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  textAlign: "center",
                                  color: "gray",
                                  fontSize: "120%",
                                }}
                              >
                                10&nbsp;&nbsp;
                                <span
                                  className="iconify"
                                  data-icon="bx:bxs-user"
                                ></span>
                                |0&nbsp;&nbsp;
                                <span
                                  className="iconify"
                                  data-icon="bx:bxs-user"
                                ></span>
                                |0 &nbsp;&nbsp;
                                <span
                                  class="iconify"
                                  data-icon="bi:star-fill"
                                ></span>
                              </div>
                              <hr />
                              <div
                                style={{
                                  backgroundColor: "lightgray",
                                }}
                              >
                                <Row className="pics">
                                  {imageUrl.map((data, id) => {
                                    value++;
                                    if (id < 4) {
                                      return (
                                        <img
                                          src={data.url}
                                          style={{
                                            width: "51%",
                                            height: "38%",

                                            marginBottom: 10,
                                            border: 2,
                                            marginTop: 10,
                                            borderRadius: 20,
                                          }}
                                        />
                                      );
                                    }
                                  })}
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        );
                      }
                    })}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
        ) : state === 1 ? (
          <Row className="my-4">
            <Card
              style={{
                marginTop: -25,

                backgroundColor: "#f5f2f2",
                borderLeft: "none",
                borderRight: "none",
                fontSize: 20,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              <Card.Body>User Images</Card.Body>
              <Card.Body>
                <div>
                  <Row
                    style={{
                      backgroundColor: "lightgray",
                      height: "40%",
                    }}
                  >
                    {imageUrl.map((data, id) => {
                      return (
                        <img
                          src={data.url}
                          style={{
                            width: "15%",
                            height: "15%",
                            objectFit: "cover",

                            marginBottom: 10,
                            border: 2,
                            marginTop: 10,
                            borderRadius: 20,
                          }}
                        />
                      );
                    })}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Row>
        ) : (
          <Row className="my-4">
            <Card
              style={{
                marginTop: -25,

                backgroundColor: "#f5f2f2",
                borderLeft: "none",
                borderRight: "none",
                fontSize: 20,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              <Card.Body>Videos</Card.Body>
              <Row>
                {videoUrl.map((data, id) => {
                  return (
                    <video
                      style={{
                        width: "25%",
                        height: "45%",
                        objectFit: "cover",

                        marginBottom: 10,
                        border: 2,
                        marginTop: 10,
                        borderRadius: 20,
                      }}
                      controls
                    >
                      <source src={data.url} />
                    </video>
                  );
                })}
              </Row>
            </Card>
          </Row>
        )}
      </Header>
    </div>
  );
}
