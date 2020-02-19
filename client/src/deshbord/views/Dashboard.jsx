
import React from "react";
import { Line } from "react-chartjs-2";
import {Link} from 'react-router-dom'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import '../deshbord.css'
class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          
        <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/air.jpg")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="6">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Link to='/admin/add-flight' >
                          <Card className="card-stats">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-warning">
                                    <i className="tim-icons icon-send text-warning" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">ADD</CardTitle>
                                    <p />
                                    <p className="card-category">Flight</p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Link to='/admin/user-profile' >
                          <Card className="card-stats upper bg-default">
                            <CardBody>
                              <Row>
                                <Col md="4" xs="5">
                                  <div className="icon-big text-center icon-warning">
                                    <i className="tim-icons icon-single-02 text-white" />
                                  </div>
                                </Col>
                                <Col md="8" xs="7">
                                  <div className="numbers">
                                    <CardTitle tag="p">Profile</CardTitle>
                                    <p />
                                    <p className="card-category"></p>
                                  </div>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Link>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                      <Link to='/admin/invoice-generator' >
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-tap-02 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Generate</CardTitle>
                                  <p />
                                  <p className="card-category">Invoice</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Link>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                      <Link to='/admin/edit-flight' >
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-pencil text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Edit</CardTitle>
                                  <p />
                                  <p className="card-category">Flight</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Thanks !
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
        </div>
      </>
    );
  }
}


export default Dashboard;
