import React, { useState, useEffect } from "react";
import Header from "./Header";
import {
  Col,
  Row,
  Container,
  Card,
  NavDropdown,
  ProgressBar,
} from "react-bootstrap";
import "./Dashboard.css";
import Chart from "./Chart";
import Ring from "./Ring";
export default function Dashboard() {
  const data = [
    { name: "Page A", pv: 240 },
    { name: "B", pv: 2210 },
    { name: "C", pv: 2300 },
    { name: "Page D", pv: 2000 },
    { name: "Zero", pv: 0 },
    { name: "Hi", pv: 123 },
    { name: "Bye", pv: 2091 },
  ];

  return (
    <div>
      <Header className="bar ">
        <Row>
          <div
            style={{
              color: "black",

              fontSize: "230%",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            DashBoard
          </div>
          <Row style={{ marginBottom: 20 }}>
            <Col
              style={{ marginBottom: 20 }}
              xl={3}
              md={5}
              lg={6}
              sm={8}
              xs={12}
            >
              <Card style={{ backgroundColor: "#4e73df" }}>
                <Card.Body>
                  <Card
                    style={{
                      marginBottom: -17,
                      marginTop: -17,
                      marginRight: -17,
                      marginLeft: -13,
                    }}
                  >
                    <Card.Body>
                      <div
                        style={{
                          color: "#4e73df",
                          fontSize: 13,
                          fontWeight: "bold",
                        }}
                      >
                        USERS
                      </div>
                      <div
                        style={{
                          fontSize: 20,

                          fontWeight: "bold",
                        }}
                      >
                        1929
                      </div>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
            <Col
              style={{ marginBottom: 20 }}
              xl={3}
              md={5}
              lg={6}
              sm={8}
              xs={12}
            >
              <Card style={{ backgroundColor: "#1cc88a " }}>
                <Card.Body>
                  <Card
                    style={{
                      marginBottom: -17,
                      marginTop: -17,
                      marginRight: -17,
                      marginLeft: -13,
                    }}
                  >
                    <Card.Body>
                      <div
                        style={{
                          fontSize: 13,
                          color: "#1cc88a",
                          fontWeight: "bold",
                        }}
                      >
                        CREATORS
                      </div>
                      <div
                        style={{
                          fontSize: 20,

                          fontWeight: "bold",
                        }}
                      >
                        28
                      </div>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
            <Col
              style={{ marginBottom: 20 }}
              xl={3}
              md={5}
              lg={6}
              sm={8}
              xs={12}
            >
              <Card style={{ backgroundColor: "#36b9cc " }}>
                <Card.Body>
                  <Card
                    style={{
                      marginBottom: -17,
                      marginTop: -17,
                      marginRight: -17,
                      marginLeft: -13,
                    }}
                  >
                    <Card.Body>
                      <div
                        style={{
                          color: "#36b9cc ",
                          fontSize: 13,
                          fontWeight: "bold",
                        }}
                      >
                        REPORTS
                      </div>
                      <div
                        style={{
                          fontSize: 20,

                          fontWeight: "bold",
                        }}
                      >
                        42
                      </div>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div>
            <Row>
              <Col xl={8} md={10} lg={7} sm={12} xs={12}>
                <Card>
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
                          Earning Overviews
                        </Col>

                        <Col>
                          <NavDropdown
                            title={
                              <img
                                style={{
                                  width: 20,
                                  height: 20,
                                  color: "lightgray",
                                  opacity: "50%",
                                  marginRight: -20,
                                  marginLeft: 30,
                                  backgroundColor: "lightgray",
                                }}
                                src={require("./Assets/kebab.png")}
                              />
                            }
                            className="ms-auto"
                            id="basic-nav-dropdown"
                          >
                            <NavDropdown.Item href="#action/3.1">
                              Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              Separated link
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Col>
                      </Row>
                    </Card>
                    <Chart />
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} md={10} lg={5} sm={12} xs={12}>
                <Card className="bottom">
                  <Card.Body>
                    <Card
                      style={{
                        margin: -17,
                        padding: 10,
                        paddingRight: -20,
                        backgroundColor: "#f5f2f2",
                        color: "blue",
                        fontWeight: "bold",
                      }}
                    >
                      <Row>
                        <Col
                          xl={9}
                          md={9}
                          lg={8}
                          sm={7}
                          xs={7}
                          style={{
                            marginTop: 10,

                            fontSize: 17,
                          }}
                        >
                          Revenue Sources
                        </Col>

                        <Col>
                          <NavDropdown
                            title={
                              <img
                                style={{
                                  width: 20,
                                  height: 20,
                                  opacity: "50%",
                                  backgroundColor: "lightgray",
                                }}
                                src={require("./Assets/kebab.png")}
                              />
                            }
                            className="ms-auto"
                            id="basic-nav-dropdown"
                          >
                            <NavDropdown.Item href="#action/3.1">
                              Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                              Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              Separated link
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Col>
                      </Row>
                    </Card>
                    <Ring />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div>
            <div>
              <Row>
                <Row>
                  <Col xl={6} md={10} lg={7} sm={12} xs={12}>
                    <Card style={{ marginTop: 20 }}>
                      <Card.Body>
                        <Card
                          style={{
                            margin: -17,
                            padding: 10,
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
                                marginLeft: 10,
                                fontSize: 17,
                              }}
                            >
                              Projects
                            </Col>

                            <Col>
                              <NavDropdown
                                title={
                                  <img
                                    style={{
                                      width: 20,
                                      height: 20,
                                      opacity: "50%",
                                      marginRight: -80,
                                      backgroundColor: "lightgray",
                                    }}
                                    src={require("./Assets/kebab.png")}
                                  />
                                }
                                className="ms-auto"
                                id="basic-nav-dropdown"
                              >
                                <NavDropdown.Item href="#action/3.1">
                                  Action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                  Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                  Something
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                  Separated link
                                </NavDropdown.Item>
                              </NavDropdown>
                            </Col>
                          </Row>
                        </Card>

                        <div style={{ marginTop: 30, marginBottom: 20 }}>
                          <Row>
                            <Col
                              style={{
                                marginBottom: 5,
                                color: "gray",
                                fontSize: 13,
                              }}
                              xl={10}
                              md={9}
                              lg={6}
                              sm={11}
                              xs={11}
                            >
                              Server-Migration
                            </Col>
                            <Col
                              style={{
                                marginBottom: 5,
                                color: "gray",
                                fontSize: 13,
                              }}
                            >
                              20%
                            </Col>
                          </Row>
                          <ProgressBar now={20} variant={"bar1"} />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <Row>
                            <Col
                              style={{
                                marginBottom: 5,
                                color: "gray",
                                fontSize: 13,
                              }}
                              xl={10}
                              md={9}
                              lg={6}
                              sm={11}
                              xs={11}
                            >
                              Sales Tracking
                            </Col>
                            <Col
                              style={{
                                marginBottom: 10,
                                color: "gray",
                                fontSize: 13,
                              }}
                            >
                              40%
                            </Col>
                          </Row>
                          <ProgressBar now={40} variant={"bar2"} />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <Row>
                            <Col
                              style={{
                                marginBottom: 5,
                                color: "gray",
                                fontSize: 13,
                              }}
                              xl={10}
                              md={9}
                              lg={6}
                              sm={11}
                              xs={11}
                            >
                              Customer Database
                            </Col>
                            <Col
                              style={{
                                marginBottom: 10,
                                color: "gray",
                                fontSize: 13,
                              }}
                            >
                              60%
                            </Col>
                          </Row>
                          <ProgressBar now={60} variant={"bar3"} />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <Row>
                            <Col
                              style={{
                                marginBottom: 5,
                                color: "gray",
                                fontSize: 13,
                              }}
                              xl={10}
                              md={9}
                              lg={6}
                              sm={11}
                              xs={11}
                            >
                              Payout Details
                            </Col>
                            <Col
                              style={{
                                marginBottom: 10,
                                color: "gray",
                                fontSize: 13,
                              }}
                            >
                              80%
                            </Col>
                          </Row>
                          <ProgressBar now={80} variant={"bar4"} />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <Row>
                            <Col
                              style={{
                                marginBottom: 5,
                                color: "gray",
                                fontSize: 13,
                              }}
                              xl={9}
                              md={9}
                              lg={6}
                              sm={11}
                              xs={11}
                            >
                              Account Setup
                            </Col>
                            <Col
                              style={{
                                marginLeft: 20,
                                marginBottom: 10,
                                color: "gray",
                                fontSize: 13,
                              }}
                            >
                              Complete!
                            </Col>
                          </Row>
                          <ProgressBar now={100} variant={"bar5"} />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xl={6} md={10} lg={5} sm={12} xs={12}>
                    <Col>
                      <Card style={{ marginTop: 20 }}>
                        <Card.Body>
                          <Card
                            style={{
                              margin: -17,
                              padding: 10,
                              backgroundColor: "#f5f2f2",
                              color: "blue",
                              fontWeight: "bold",
                            }}
                          >
                            Illustrations
                          </Card>
                        </Card.Body>
                        <span
                          style={{
                            paddingLeft: 20,
                            marginTop: 60,
                            paddingRight: 23,
                            marginBottom: 20,
                          }}
                        >
                          Add some quality, svg illustrations to your project
                          courtesy of unDraw, a constantly updated collection of
                          beautiful svg images that you can use completely free
                          and without attribution!
                        </span>
                      </Card>
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <Card style={{ marginTop: 20 }}>
                            <Card.Body>
                              <Card
                                style={{
                                  margin: -17,
                                  padding: 10,

                                  backgroundColor: "#f5f2f2",
                                  color: "blue",
                                  fontWeight: "bold",
                                }}
                              >
                                <Row>
                                  <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                    Development Approach
                                  </Col>
                                </Row>
                              </Card>
                              <div
                                style={{
                                  paddingLeft: 20,
                                  marginTop: 80,
                                  paddingRight: 23,
                                }}
                              >
                                SB Admin 2 makes extensive use of Bootstrap 4
                                utility classes in order to reduce CSS bloat and
                                poor page performance. Custom CSS classes are
                                used to create custom components and custom
                                utility classes. Before working with this theme,
                                you should become familiar with the Bootstrap
                                framework, especially the utility classes
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} md={10} lg={7} sm={12} xs={12}>
                    <Row>
                      <Col>
                        <Card className="bottom">
                          <Card.Body>
                            <Card
                              style={{
                                margin: -17,
                                padding: 10,
                                backgroundColor: "#f5f2f2",
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#4e73df",
                              }}
                            >
                              <Row>
                                <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                  Primary
                                </Col>
                              </Row>
                            </Card>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={3} md={10} lg={7} sm={12} xs={12}>
                    <Row>
                      <Col>
                        <Card className="bot">
                          <Card.Body>
                            <Card
                              style={{
                                margin: -17,
                                padding: 10,
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#4e73df",
                              }}
                            >
                              <Row>
                                <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                  Secondary
                                </Col>
                              </Row>
                            </Card>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} md={10} lg={7} sm={12} xs={12}>
                    <Row>
                      <Col>
                        <Card style={{ marginTop: 20 }}>
                          <Card.Body>
                            <Card
                              style={{
                                margin: -17,
                                padding: 10,
                                backgroundColor: "#f5f2f2",
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#4e73df",
                              }}
                            >
                              <Row>
                                <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                  Primary
                                </Col>
                              </Row>
                            </Card>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={3} md={10} lg={7} sm={12} xs={12}>
                    <Row>
                      <Col style={{ marginTop: 20 }}>
                        <Card>
                          <Card.Body>
                            <Card
                              style={{
                                margin: -17,
                                padding: 10,
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#4e73df",
                              }}
                            >
                              <Row>
                                <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                  Secondary
                                </Col>
                              </Row>
                            </Card>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xl={3} md={10} lg={7} sm={12} xs={12}>
                    <Row>
                      <Col>
                        <Card style={{ marginTop: 20, marginBottom: 20 }}>
                          <Card.Body>
                            <Card
                              style={{
                                margin: -17,
                                padding: 10,
                                backgroundColor: "#f5f2f2",
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#4e73df",
                              }}
                            >
                              <Row>
                                <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                  Primary
                                </Col>
                              </Row>
                            </Card>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col xl={3} md={10} lg={7} sm={12} xs={12}>
                    <Row>
                      <Col style={{ marginTop: 20, marginBottom: 20 }}>
                        <Card>
                          <Card.Body>
                            <Card
                              style={{
                                margin: -17,
                                padding: 10,
                                color: "white",
                                fontWeight: "bold",
                                backgroundColor: "#4e73df",
                              }}
                            >
                              <Row>
                                <Col xl={8} md={9} lg={8} sm={7} xs={7}>
                                  Secondary
                                </Col>
                              </Row>
                            </Card>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </Row>
      </Header>
    </div>
  );
}
