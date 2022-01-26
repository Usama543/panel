import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import CsvDetail from "./CsvDetail";
import $ from "jquery";

import creator_list from "./creator_list";
export default function Gift({ children }) {
  const { Content, Footer, Sider } = Layout;
  const [state, setState] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("Admin");
  const [points, setPoints] = useState("");
  const [active, setActive] = useState("Active");
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("query");

  useEffect(() => {
    if (query != null) {
      creator_list.map((data) => {
        if (data.id == name) {
          setName(data.name);
          setPoints(data.callprice);
          setType(data.item);
          setActive(data.callprice);
        }
      });
    } else {
      setType("Admin");
      setActive("Active");
    }
  }, [name, points, type, active]);
  return (
    <div>
      <Header>
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
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
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
            }}
          >
            Gift Detail
          </button>

          <button
            onClick={() => {
              setState(1);
              $("#csv").css({ backgroundColor: "white" });
              $("#user").css({ backgroundColor: "#f5f2f2" });
            }}
            id="csv"
            style={{
              border: "none",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              outline: "none !important",
              padding: 10,
              marginLeft: 10,
            }}
            type="button"
          >
            CSV Upload
          </button>
        </Menu>
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            borderTopRightRadius: 10,

            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: -16,
            marginLeft: 32,
          }}
        >
          {state === 0 ? (
            <div>
              <div>
                <Row className="my-4">
                  <Col xl={8} md={10} lg={7} sm={12} xs={12}>
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
                              Admin Details
                            </Col>
                          </Row>
                        </Card>
                      </Card.Body>
                      <Row>
                        <Col className="mx-2 my-3">
                          <div className="my-2">Name</div>
                          <input
                            onChange={(value) => {
                              setName(value.value);
                            }}
                            className="form-control"
                            type="text"
                            placeholder="name"
                            value={name}
                          />
                        </Col>
                        <Col className="mx-2 my-3">
                          <div className="my-2">Type</div>
                          <select
                            name="cars"
                            className="form-select select"
                            id="cars"
                          >
                            <option> {type}</option>
                            <option value="saab">Super Admin</option>
                          </select>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mx-2 my-2">
                          <div className="my-2">Points</div>
                          <input
                            onChange={(value) => {
                              setPoints(value.value);
                            }}
                            value={points}
                            className="form-control"
                            type="text"
                            placeholder="Points"
                          />
                        </Col>
                        <Col className="mx-2 my-2">
                          <div className="my-2">Active</div>
                          <select
                            name="cars"
                            className="form-select select"
                            id="cars"
                          >
                            <option value="volvo">{active}</option>
                            <option value="saab">Blocked</option>
                          </select>
                        </Col>
                      </Row>

                      <div className="my-2">
                        <button className="btn bg-primary text-light mx-2">
                          {" "}
                          Submit
                        </button>
                        <button className="btn bg-secondary text-light mx-2">
                          Cancel
                        </button>
                      </div>
                    </Card>
                  </Col>
                  <Col xl={4} md={10} lg={7} sm={12} xs={12}>
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
                              Add Image
                            </Col>
                          </Row>
                        </Card>
                      </Card.Body>
                      <Row>
                        <Col className="mx-2 my-3">
                          <div className="my-2">Image</div>
                          <input
                            className="form-control"
                            type="file"
                            placeholder="name"
                          />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          ) : (
            <Row className="my-4">
              <Col xl={4} md={10} lg={7} sm={12} xs={12}>
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
                          Add Image
                        </Col>
                      </Row>
                    </Card>
                  </Card.Body>
                  <Row>
                    <Col className="mx-2 my-3">
                      <div className="my-2">Image</div>
                      <input
                        className="form-control"
                        type="file"
                        placeholder="name"
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          )}
        </div>
      </Header>
    </div>
  );
}
