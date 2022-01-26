import React from "react";
import Header from "./Header";
import { Col, Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDetail.css";
export default function AdminDetail() {
  return (
    <div>
      <Header>
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
                    className="form-control"
                    type="text"
                    placeholder="name"
                  />
                </Col>
                <Col className="mx-2 my-3">
                  <div className="my-2">Type</div>
                  <select name="cars" className="form-select select" id="cars">
                    <option value="volvo"> Admin</option>
                    <option value="saab">Super Admin</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col className="mx-2 my-2">
                  <div className="my-2">Password</div>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="password"
                  />
                </Col>
                <Col className="mx-2 my-2">
                  <div className="my-2">Email</div>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="email"
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mx-2 my-2">
                  <div className="my-2">Phone NO</div>
                  <input
                    className="form-control"
                    type="number"
                    placeholder="phone no"
                  />
                </Col>
                <Col className=" mx-2 my-2">
                  <div className="my-2">Male</div>
                  <select className="form-select" name="cars" id="cars">
                    <option value="volvo"> Male</option>
                    <option value="saab">Female</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col className="mx-2 my-2">
                  <div className="my-2 ">Active</div>
                  <select
                    className="form-select "
                    style={{ width: "47%" }}
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo"> Active</option>
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
      </Header>
    </div>
  );
}
