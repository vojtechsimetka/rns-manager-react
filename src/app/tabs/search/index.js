import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { DomainStateContainer } from './containers';

class Search extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col><DomainStateContainer /></Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
