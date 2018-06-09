import "bootstrap/dist/css/bootstrap.min.css";

import React, { Component } from "react";
import { Button, Badge, Row, Col } from "reactstrap";
import { Button as StyledButton } from "../styled/Button";
import { ContainerStyled } from "../styled/Container";

import {
  Breadcrumb as StyledBreadcrumb,
  BreadcrumbItem
} from "../styled/Breadcrumb";

class App extends Component {
  render() {
    return (
      <ContainerStyled>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .col-sm-order-2 .col-sm-offset-2
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            .col-sm-12 .col-md-6 .col-md-offset-3
          </Col>
        </Row>
        <StyledButton primary="true">Cliquez moi</StyledButton>
        <p>
          Je suis un badge <Badge color="secondary">New</Badge>
        </p>
        <Button color="primary" outline>
          Notifications <Badge color="secondary">4</Badge>
        </Button>
        <Button outline color="primary">
          primary
        </Button>{" "}
        <Button outline color="secondary">
          secondary
        </Button>{" "}
        <Button outline color="success">
          success
        </Button>{" "}
        <Button outline color="info">
          info
        </Button>{" "}
        <Button outline color="warning">
          warning
        </Button>{" "}
        <Button outline color="danger">
          danger
        </Button>
        <StyledBreadcrumb primary>
          <BreadcrumbItem active>Home</BreadcrumbItem>
          <BreadcrumbItem>Contact</BreadcrumbItem>
          <BreadcrumbItem>A props</BreadcrumbItem>
        </StyledBreadcrumb>
      </ContainerStyled>
    );
  }
}

export default App;
