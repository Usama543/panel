import React, { useState, useEffect, useRef } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Col,
  Row,
  Container,
  Card,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import "./Header.css";
import Topbar from "./Topbar";
import $ from "jquery";
import { RightOutlined } from "@ant-design/icons";

export default function Header({ children }) {
  const { Header, Content, Footer, Sider } = Layout;

  const [state, setState] = useState(0);
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [pad, setPad] = useState(window.innerWidth / 23);
  const [detail, setDetail] = useState(false);
  const [padding, setPadding] = useState(29);
  const [userdetail, setUser] = useState(false);
  const [moneydetail, setMoney] = useState(false);
  const [hite, setHite] = useState(window.innerHeight);
  const [videodetail, setVideo] = useState(false);
  const [giftdetail, setGift] = useState(false);
  const [packdetail, setPack] = useState(false);
  const [creatordetail, setCreator] = useState(false);
  const [font, setFont] = useState();
  const [height, setHeight] = useState(window.innerWidth);
  const [drawer, setDrawer] = useState(window.innerWidth / 3);
  const [Root, setRoot] = useState();
  const [requestpop, setRequestpop] = useState(false);
  const [adminpop, setAdmin] = useState(false);
  const [videopop, setVideo2] = useState(false);
  const [userpop, setUser2] = useState(false);
  const [creatorpop, setCreatorpop] = useState(false);
  const [giftpop, setGiftpop] = useState(false);
  const [packpop, setPackpop] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 860) {
      setRoot(240);

      setDrawer(430);
      $("#content").css({ marginLeft: 240 });
      setFont(15);

      setAdmin(false);
    }
    if (window.innerWidth <= 860) {
      setAdmin(false);

      setDrawer(225);
      $("#content").css({ marginLeft: 120 });
      setRoot(0);
      setFont(11);
    }
  }, []);
  //empty dependency array so it only runs once at render

  function Slide() {
    if (detail == false) {
      $("#arrow").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#detail").slideDown();
    } else {
      $("#arrow").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#detail").slideUp();
    }

    setDetail(!detail);
  }
  function userSlide() {
    if (userdetail == false) {
      $("#arrow1").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow1").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
      $("#userdetails").slideDown();
    } else {
      $("#arrow1").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow1").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#userdetails").slideUp();
    }
    setUser(!userdetail);
  }

  function moneySlide() {
    if (moneydetail == false) {
      $("#arrow2").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow2").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
      $("#moneydetails").slideDown();
    } else {
      $("#arrow2").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow2").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#moneydetails").slideUp();
    }
    setMoney(!moneydetail);
  }
  function videoSlide() {
    if (videodetail == false) {
      $("#arrow3").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow3").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
      $("#videodetails").slideDown();
    } else {
      $("#arrow3").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow3").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#videodetails").slideUp();
    }
    setVideo(!videodetail);
  }
  function creatorSlide() {
    if (creatordetail == false) {
      $("#arrow4").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow4").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
      $("#creatordetails").slideDown();
    } else {
      $("#arrow4").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow4").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#creatordetails").slideUp();
    }
    setCreator(!creatordetail);
  }
  function giftSlide() {
    if (giftdetail == false) {
      $("#arrow5").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow5").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
      $("#giftdetails").slideDown();
    } else {
      $("#arrow5").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow5").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#giftdetails").slideUp();
    }
    setGift(!giftdetail);
  }
  function packSlide() {
    if (packdetail == false) {
      $("#arrow6").animate(
        { deg: 90 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow6").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );
      $("#packdetails").slideDown();
    } else {
      $("#arrow6").animate(
        { deg: 0 },
        {
          duration: 200,
          step: function (now) {
            $("#arrow6").css({ transform: "rotate(" + now + "deg)" });
          },
        }
      );

      $("#packdetails").slideUp();
    }
    setPack(!packdetail);
  }

  const [hide, setHide] = useState(1);

  return (
    <Row id="body" scroll="no" style={{ position: "relative" }}>
      <Col
        xl={3}
        lg={3}
        md={3}
        id="sider"
        className=" d-lg-block d-xl-block "
        ref={elementRef}
        style={{ width: "18.5%" }}
      >
        <Col
          xl={12}
          lg={12}
          md={12}
          xs={12}
          sm={12}
          id="side"
          style={{
            alignContent: "center",
            width: "18.5%",
            position: "fixed",
            top: 0,
            height: window.innerHeight,
            background: "linear-gradient(-120deg, #fc03c6 20%, #c253db 50%)",
            overflowX:
              "hidden" /* This gives extra space under this span. Why? */,

            fontFamily: "Gill Sans, sans-serif",

            justifyContent: "center",
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            style={{
              background: "linear-gradient(-120deg, #fc03c6 20%, #c253db 50%)",
              textColor: "white",
              color: "white",
              fontWeight: 900,
            }}
          >
            <span
              style={{
                justifyContent: "center",
              }}
            >
              &nbsp; &nbsp;&nbsp;&nbsp;
              <div>
                <Link to="/">
                  <button
                    className="display-xl-5 display-lg-3 display-md-2 display-sm-2"
                    type="button"
                    style={{
                      outline: "none !important",
                      backgroundColor: "lightblue",
                      border: "none",
                      color: "white",
                      background: "rgba(252, 109, 243,10%)",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "120%",
                      justifyContent: "center",
                      fontFamily: "Gill Sans, sans-serif",
                    }}
                  >
                    <span
                      className="iconify"
                      style={{ fontSize: "120%" }}
                      data-icon="fa-solid:laugh-wink"
                    ></span>{" "}
                    MYFANS &nbsp;
                    <sup>ADMIN</sup>
                  </button>
                </Link>
              </div>
              <hr style={{ marginRight: font - 4 }} />
              <div>
                <Link to="/">
                  <button
                    type="button"
                    style={{
                      outline: "none !important",
                      backgroundColor: "lightblue",
                      border: "none",
                      color: "white",
                      fontWeight: "bold",
                      background: "rgba(237, 28, 202,1%)",
                    }}
                  >
                    Dashboard
                  </button>
                </Link>
              </div>
              <hr style={{ marginRight: font }} />
            </span>
            <div
              style={{
                paddingBottom: 25,
                opacity: "80%",
                fontSize: "70%",
                marginLeft: -20,
              }}
            >
              INTERFACE
            </div>
            <div className="hover">
              <button
                type="button"
                className="sider"
                onClick={Slide}
                style={{
                  outline: "none !important",
                  border: "none",
                  color: "white",
                  background: "rgba(237, 28, 202,1%)",
                  font: font - 10,
                }}
              >
                Admin Details
                <span>
                  <RightOutlined className="arrow" id="arrow" />
                </span>
              </button>
              <span style={{ marginLeft: 30 }}></span>
            </div>

            <Card
              className="sider"
              id="detail"
              style={{
                margin: 10,
                width: width - 30,
                borderRadius: 10,
                display: "none",
                color: "black",
                marginLeft: -15,
              }}
            >
              <Card.Body>
                <span style={{ color: "lightgrey", fontSize: 11 }}>ADMIN:</span>
                <span style={{ marginLeft: -100 }}>
                  <div className="link">
                    <Link to="/adminDetail">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "23%",
                          paddingRight: "23%",
                          paddingTop: "6%",
                          paddingBottom: "6%",
                        }}
                        className="button"
                      >
                        Add Admin
                      </button>
                    </Link>
                  </div>
                  <Link to="/adminList">
                    <button
                      type="button"
                      style={{
                        paddingLeft: "23%",
                        paddingRight: "23%",
                        paddingTop: "6%",
                        paddingBottom: "6%",
                      }}
                      className="button"
                    >
                      List Admin
                    </button>
                  </Link>
                </span>
              </Card.Body>
            </Card>

            <div>
              <div className="hover">
                <button
                  type="button"
                  className="sider"
                  onClick={userSlide}
                  style={{
                    outline: "none !important",
                    border: "none",
                    color: "white",
                    marginLeft: -3,
                    background: "rgba(237, 28, 202,1%)",

                    font: font - 10,
                  }}
                >
                  User Managment
                  <span>
                    <RightOutlined
                      className="arrow"
                      id="arrow1"
                      style={{ marginLeft: 20 }}
                    />
                  </span>
                </button>
                <span style={{ marginLeft: 30 }}></span>
              </div>

              <Card
                className="sider"
                style={{
                  margin: 10,
                  width: width - 30,
                  borderRadius: 10,
                  display: "none",
                  color: "black",
                  marginLeft: -15,
                }}
                id="userdetails"
              >
                <Card.Body>
                  <span style={{ color: "lightgrey", fontSize: 11 }}>
                    USER:
                  </span>
                  <span style={{ marginLeft: -100 }}>
                    <div className="link">
                      <Link to="/userdetail">
                        <button
                          type="button"
                          style={{
                            paddingLeft: "25%",
                            paddingRight: "25%",
                            paddingTop: "5%",
                            paddingBottom: "5%",
                          }}
                          className="button"
                        >
                          Add User
                        </button>
                      </Link>
                    </div>
                    <Link to="/userList">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "25%",
                          paddingRight: "25%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                        }}
                        className="button"
                      >
                        List User
                      </button>
                    </Link>
                    <Link to="/creatorList">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "25%",
                          paddingRight: "25%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                        }}
                        className="button"
                      >
                        List Creator
                      </button>
                    </Link>
                  </span>
                </Card.Body>
              </Card>
            </div>

            <div>
              <Link to="/inquiry" className="hover" style={{ padding: "10%" }}>
                <button
                  type="button"
                  className="sider"
                  style={{
                    oultine: "none !important",

                    border: "none ",
                    marginLeft: -20,
                    color: "white",
                    background: "rgba(237, 28, 202,1%)",
                  }}
                >
                  Inquiry
                </button>
              </Link>
            </div>
            <div>
              <div className="hover">
                <button
                  className="sider"
                  type="button"
                  onClick={moneySlide}
                  style={{
                    outline: "none !important",
                    border: "none",
                    color: "white",
                    marginLeft: -3,
                    background: "rgba(237, 28, 202,1%)",

                    font: font - 10,
                  }}
                >
                  Money Request
                  <span>
                    <RightOutlined
                      className="arrow"
                      id="arrow2"
                      style={{ marginLeft: 25 }}
                    />
                  </span>
                </button>
                <span style={{ marginLeft: 30 }}></span>
              </div>

              <Card
                className="sider"
                style={{
                  margin: 10,
                  width: width - 30,
                  borderRadius: 10,
                  display: "none",
                  color: "black",
                  marginLeft: -15,
                }}
                id="moneydetails"
              >
                <Card.Body>
                  <span style={{ color: "lightgrey", fontSize: 11 }}>
                    REQUESTS
                  </span>
                  <span style={{ marginLeft: -100 }}>
                    <div className="link">
                      <Link to="/pendingList">
                        <button
                          type="button"
                          style={{
                            paddingLeft: "20%",
                            paddingRight: "20%",
                            paddingTop: "5%",
                            paddingBottom: "5%",
                            fontSize: "90%",
                          }}
                          className="button"
                        >
                          Pending Request
                        </button>
                      </Link>
                    </div>
                    <Link to="/acceptRequest">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "20%",
                          paddingRight: "20%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Accept Request
                      </button>
                    </Link>
                    <Link to="/declineRequest">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "20%",
                          paddingRight: "20%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Decline Request
                      </button>
                    </Link>
                  </span>
                </Card.Body>
              </Card>
            </div>

            <div className="hover">
              <button
                className="sider"
                type="button"
                onClick={videoSlide}
                style={{
                  outline: "none !important",
                  border: "none",
                  color: "white",
                  marginLeft: -3,
                  background: "rgba(237, 28, 202,1%)",

                  font: font - 10,
                }}
              >
                Video
                <span>
                  <RightOutlined
                    className="arrow"
                    id="arrow3"
                    style={{ marginLeft: 90 }}
                  />
                </span>
              </button>
              <span style={{ marginLeft: 30 }}></span>
            </div>

            <Card
              className="sider"
              style={{
                margin: 10,
                width: width - 30,
                borderRadius: 10,
                display: "none",
                color: "black",
                marginLeft: -15,
              }}
              id="videodetails"
            >
              <Card.Body>
                <span style={{ color: "lightgrey", fontSize: 11 }}>
                  VIDEO DETAILS
                </span>
                <span style={{ marginLeft: -100 }}>
                  <div className="link">
                    <Link to="/videoList">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "25%",
                          paddingRight: "25%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Video List
                      </button>
                    </Link>
                  </div>
                </span>
              </Card.Body>
            </Card>
            <div className="hover">
              <button
                className="sider"
                type="button"
                onClick={creatorSlide}
                style={{
                  outline: "none !important",
                  border: "none",
                  color: "white",
                  marginLeft: -3,
                  background: "rgba(237, 28, 202,1%)",

                  fontSize: "90%",
                }}
              >
                Creator
                <span>
                  <RightOutlined
                    className="arrow"
                    id="arrow4"
                    style={{ marginLeft: 80 }}
                  />
                </span>
              </button>
              <span style={{ marginLeft: 30 }}></span>
            </div>

            <Card
              className="sider"
              style={{
                margin: 10,
                width: width - 30,
                borderRadius: 10,
                display: "none",
                color: "black",
                marginLeft: -15,
              }}
              id="creatordetails"
            >
              <Card.Body>
                <span style={{ color: "lightgrey", fontSize: 11 }}>
                  MANAGE CREATOR{" "}
                </span>
                <span style={{ marginLeft: -100 }}>
                  <div className="link">
                    <Link to="/creatorRequest">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "20%",
                          paddingRight: "20%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Creator Request
                      </button>
                    </Link>
                  </div>
                </span>
              </Card.Body>
            </Card>
            <div className="hover">
              <button
                className="sider"
                type="button"
                onClick={giftSlide}
                style={{
                  outline: "none !important",
                  border: "none",
                  color: "white",
                  marginLeft: -3,
                  background: "rgba(237, 28, 202,1%)",

                  font: font - 10,
                }}
              >
                Gifts
                <span>
                  <RightOutlined
                    className="arrow"
                    style={{ marginLeft: 100 }}
                    id="arrow5"
                  />
                </span>
              </button>
              <span style={{ marginLeft: 30 }}></span>
            </div>

            <Card
              className="sider"
              style={{
                margin: 10,
                width: width - 30,
                borderRadius: 10,
                display: "none",
                color: "black",
                marginLeft: -15,
              }}
              id="giftdetails"
            >
              <Card.Body>
                <span style={{ color: "lightgrey", fontSize: 11 }}>GIFTS:</span>
                <span style={{ marginLeft: -100 }}>
                  <div className="link">
                    <Link to="/gift">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "26%",
                          paddingRight: "26%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Gift Details
                      </button>
                    </Link>
                    <Link to="/giftList">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "30%",
                          paddingRight: "34%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Gift List
                      </button>
                    </Link>
                  </div>
                </span>
              </Card.Body>
            </Card>
            <div className="hover">
              <button
                className="sider"
                type="button"
                onClick={packSlide}
                style={{
                  outline: "none !important",
                  border: "none",
                  color: "white",
                  marginLeft: -3,
                  background: "rgba(237, 28, 202,1%)",

                  font: font - 10,
                }}
              >
                Packs
                <span>
                  <RightOutlined
                    style={{
                      marginLeft: 90,
                      font: 5,
                      fontWeight: "bold",
                    }}
                    className="arrow"
                    id="arrow6"
                  />
                </span>
              </button>
              <span style={{ marginLeft: 30 }}></span>
            </div>

            <Card
              className="sider"
              style={{
                margin: 10,
                width: width - 30,
                borderRadius: 10,
                display: "none",
                color: "black",
                marginLeft: -15,
              }}
              id="packdetails"
            >
              <Card.Body>
                <span style={{ color: "lightgrey", fontSize: 11 }}>PACKS:</span>
                <span style={{ marginLeft: -100 }}>
                  <div className="link">
                    <Link to="/addPack">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "30%",
                          paddingRight: "30%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        Add Packs
                      </button>
                    </Link>
                    <Link to="/packList">
                      <button
                        type="button"
                        style={{
                          paddingLeft: "30%",
                          paddingRight: "30%",
                          paddingTop: "5%",
                          paddingBottom: "5%",
                          fontSize: "90%",
                        }}
                        className="button"
                      >
                        List Packs
                      </button>
                    </Link>
                  </div>
                </span>
              </Card.Body>
            </Card>
            <div>
              <Link
                to="/reports"
                className="sider hover"
                style={{
                  padding: "10%",
                  verticalAlign: "bottom",
                  display: "inline-block",
                  height: "100%",
                }}
              >
                <button
                  className="bottom_aligner"
                  type="button"
                  style={{
                    outine: "none !important",
                    color: "white",
                    background: "rgba(237, 28, 202,1%)",
                    marginLeft: -20,
                    border: "none",
                  }}
                >
                  Reports
                </button>
              </Link>
              <div id="end">&nbsp;</div>
            </div>
          </Menu>
        </Col>
      </Col>
      <Col>
        <Topbar />

        <Content
          style={{
            marginLeft: 10,
            marginRight: 40,
          }}
          className="mx-5 my-5"
        >
          {children}
        </Content>
      </Col>{" "}
      <div className="fixed-bottom  bg-white ">
        <Navbar color="dark" dark>
          <Container
            style={{
              textAlign: "center",
              justifyContent: "center",

              color: "gray",
            }}
          >
            CopyRight @ your website
          </Container>
        </Navbar>
      </div>
    </Row>
  );
}
