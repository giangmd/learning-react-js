import React from 'react';

import {Container, Row, Col, Button, Card} from 'react-bootstrap';

class Home extends React.Component {
  cardLoop = () => {
    let template = []

    for (let i = 0; i < 8; i++) {
      template.push(<Col md={3} sm={6} xs={12}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Item {i}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolore do ullamco id duis mollit ex consectetur deserunt exercitation dolor cupidatat est ut tempor.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>)
    }

    return template
  }

  render() {
    return (
      <section>
        <Container>
          <Row>
            <Col md={4} sm={6} xs={12}>Col 1</Col>
            <Col md={4} sm={6} xs={12}>Col 2</Col>
            <Col md={4} sm={6} xs={12}>Col 3</Col>
          </Row>
          <Row>
            {this.cardLoop()}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Home;