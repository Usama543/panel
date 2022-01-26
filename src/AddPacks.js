import React, { useState } from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import CsvDetail from "./CsvDetail";
import $ from "jquery";

export default function AddPacks({ children }) {
  const { Content, Footer, Sider } = Layout;
  const [state, setState] = useState(0);

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
            User Detail
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
            <Row className="my-4">
              <Col xl={8} md={10} lg={7} sm={12} xs={12}>
                User Detail
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
                          Add Packs
                        </Col>
                      </Row>
                    </Card>
                  </Card.Body>
                  <Row>
                    <Col className="mx-2 my-3">
                      <div className="my-2">Name</div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="name"
                      />
                    </Col>
                    <Col className="mx-2 my-3">
                      <div className="my-2">Coins</div>
                      <select
                        name="cars"
                        className="form-select select"
                        id="cars"
                      >
                        <option value="volvo"> Admin</option>
                        <option value="saab">Super Admin</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mx-2 my-2">
                      <div className="my-2">Price</div>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                      />
                    </Col>
                    <Col className="mx-2 my-2">
                      <div className="my-2">Status</div>
                      <select
                        name="cars"
                        className="form-select select"
                        id="cars"
                      >
                        <option value="volvo"> In Active</option>
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
