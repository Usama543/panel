import React, { useState, useRef, useEffect } from "react";
import {
  SearchOutlined,
  MenuOutlined,
  BellOutlined,
  VerticalRightOutlined,
} from "@ant-design/icons";
import {
  Col,
  Row,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
} from "react-bootstrap";
import $ from "jquery";
import "./Topbar.css";
import notification from "./notification";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Topbar() {
  const [width, setWidth] = useState(window.innerWidth / 4);
  const [font, setFont] = useState(17);
  const [margin, setMargin] = useState();
  const [state, setState] = useState(false);
  const [hide, setHide] = useState(1);
  function Toggler() {
    if (window.innerWidth <= 700) {
      $("#sider").show();

      if (
        document.getElementById("container").getBoundingClientRect().height >
        500
      ) {
        $("#sider").css({
          position: "absolute",
          zIndex: 10,
          width: "0%",
          height: document.getElementById("body").getBoundingClientRect()
            .height,
        });
      } else {
        $("#sider").css({
          position: "absolute",
          zIndex: 10,
          width: "0%",
          height: "110vh",
        });
      }

      //always use relative body so that absolute width and height will change according to body and no page will be change just content space is out
      $("#body").css({
        position: "relative",
        height: "100%",
      });
      $("#sider").animate({
        width: "40%",

        transition: "ease 4s",
      });
    } else {
      if (window.innerWidth >= 860) {
        if (hide === 1) {
          setHide(2);
          setRight(60);
          $("#sider").fadeOut();
        }
        if (hide === 2) {
          setRight(0);
          setHide(1);
          $("#sider").fadeIn();
        }
      } else {
        if (hide === 1) {
          setHide(2);
          setRight(60);
          $("#sider").fadeOut();
        }
        if (hide === 2) {
          $("#sider").fadeIn();
          setHide(1);
          setRight(0);
        }
      }
    }
  }

  const [search, setSearch] = useState(false);
  const [left, setLeft] = useState();
  const ref = useRef();
  const [right, setRight] = useState();
  const [value, setValue] = useState();
  const marg = useRef();
  function hover(id) {
    $("#" + id).css({
      backgroundColor: "lightgray",
    });
  }
  function mouseOut(id) {
    $("#" + id).css({
      backgroundColor: "white",
    });
  }
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setMargin(marg.current.getBoundingClientRect().width / 4);
      setHeight(ref.current.getBoundingClientRect().height);
    }, 10);

    window.addEventListener("resize", function () {
      if (window.innerWidth <= 750) {
        $("#sider").hide();
      }
      if (window.innerWidth >= 750) {
        $("#sider").show();

        $("#sider").css({
          width: "19%",
          position: "static",
          height: 0,
        });
        $("#sider").css({
          width: "19%",
          position: "static",
          height: document.getElementById("container").getBoundingClientRect()
            .height,
        });
      }
    });
    if (window.innerWidth >= 860) {
      setLeft(300);
    } else {
      setLeft(170);
    }
  }, []);

  const [drop, setDrop] = useState(1);
  function Dropdown() {
    if (drop == 1) {
      setDrop(2);
      $("#menu").fadeIn();
    } else {
      setDrop(1);
      $("#menu").hide();
    }
  }
  function searchBar() {
    if (search == false) {
      setSearch(true);
      $("#search").fadeIn();
    } else {
      setSearch(false);

      $("#search").fadeOut();
    }
  }
  function Pane() {
    if (state == false) {
      setState(true);
      $("#pane").show();
      $("#pane").animate({
        top: height + 3,
        transition: "ease 3s",
      });
    } else {
      setState(false);
      $("#pane").animate({
        top: window.innerHeight,
        transition: "ease 3s",
      });
      $("#pane").hide();
    }
  }

  return (
    <div className="topbar">
      <div ref={ref}>
        <Navbar
          bg="light"
          expand="lg"
          className="shadow z-depth-5 bg-white row"
          ref={marg}
        >
          <Container>
            <Navbar.Brand href="#home">
              <form className=" input-group w-auto">
                <button
                  type="button"
                  onClick={Toggler}
                  style={{ borderRadius: 50, border: 1 }}
                  className="menu menuOutlined d-block   d-xl-none d-lg-none d-md-block "
                >
                  <MenuOutlined />
                </button>

                <input
                  className=" rounded form-control d-none  d-xl-block d-lg-block d-md-block d-sm-block d-xs-none"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                    backgroundColor: "rgb(245, 245, 247)",
                    opacity: "60%",
                  }}
                />
                <button
                  className=" bg-primary  d-none  d-xl-block d-lg-block d-md-block d-sm-block d-xs-none btn  btn-outline-white  "
                  type="button"
                >
                  <SearchOutlined />
                </button>
              </form>
            </Navbar.Brand>
            <Nav
              className="ms-auto expanded "
              style={{ justifyContent: "end", alignContent: "end" }}
            >
              <Nav.Link>
                <button
                  onClick={searchBar}
                  className=" d-block   d-xl-none d-lg-none d-md-none d-sm-none d-xs-block  btn  btn-outline-white  "
                  type="button"
                  style={{
                    position: "absolute",
                    right: "40%",
                    outline: "none",
                    color: "lightgray",
                  }}
                >
                  <SearchOutlined />
                </button>
                <BellOutlined
                  onClick={() => {
                    Pane();
                  }}
                  style={{
                    float: "left",
                    marginTop: 10,
                  }}
                />

                <div
                  style={{
                    color: "lightgray",
                    marginLeft: 10,
                    float: "left",
                    fontSize: 30,
                    marginTop: -10,
                  }}
                >
                  |
                </div>
                <div
                  className="left"
                  style={{
                    float: "left",
                    marginLeft: 10,
                    marginTop: -1,
                    marginTop: 10,
                  }}
                >
                  Aaron Salion
                </div>

                <img
                  className="navleft"
                  src={require("./Assets/search.png")}
                  onClick={Dropdown}
                  style={{
                    float: "right",
                    marginLeft: 20,
                    marginTop: 3,
                  }}
                />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div
        className="ms-auto shadow"
        id="pane"
        style={{
          borderRadius: 30,
          opacity: "80%",
          left: "55%",
          width: "27%",
          position: "absolute",
          top: window.innerHeight,
          backgroundColor: "white",
          color: "black",
          zIndex: 4,
          display: "none",
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 13,
            fontFamily: "Trebuchet MS, sans-serif	",
            padding: 10,
            backgroundColor: "blue",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            opacity: "80%",
          }}
        >
          ALERTS CENTER
        </div>

        {notification.map((data, id) => {
          return (
            <div
              id={data.id}
              onMouseOver={() => {
                hover(data.id);
              }}
              onMouseOut={() => {
                mouseOut(data.id);
              }}
              key={id}
            >
              <div
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  color: "black",
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderColor: "black",
                }}
                className="notification"
              >
                {data.name}
              </div>
              <hr className="hr" />
            </div>
          );
        })}
      </div>
      <form
        id="search"
        className="mx-5 d-xl-none d-lg-none d-md-none d-sm-none  input-group w-auto"
        style={{
          borderRadius: 10,
          position: "absolute",
          top: height,

          zIndex: 2,
          padding: 30,
          display: "none",
          opacity: "80%",
          margin: 10,
          backgroundColor: "white",
        }}
      >
        <input
          className=" rounded form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{
            backgroundColor: "rgb(245, 245, 247)",
            opacity: "90%",
          }}
        />
        <button className=" bg-primary" type="button">
          <SearchOutlined />
        </button>
      </form>
      <div
        id="menu"
        className="ms-auto input-group w-auto"
        style={{
          borderRadius: 15,
          position: "absolute",
          top: height,
          display: "none",
          flexDirection: "column",
          zIndex: 2,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 30,
          paddingRight: 30,
          right: 0,
          fontSize: 15,
          margin: 10,
          backgroundColor: "white",
        }}
      >
        <div>Profile</div>
        <hr />
        <div>Change Password</div>
        <hr />
        <div>Logout</div>
      </div>
    </div>
  );
}
