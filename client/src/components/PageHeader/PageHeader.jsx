import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">ACIS</h1>
            <h3 className="d-none d-sm-block">
            Listen to some typical public announcements made in an airport or airplane.
            </h3>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
