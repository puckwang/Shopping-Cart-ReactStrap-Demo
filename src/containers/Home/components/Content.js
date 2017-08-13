import React, {Component} from 'react';
import {
  Container, Row, Col, Button, Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle
} from 'reactstrap';
import AlbumJSON from './Album.json';

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <Jumbotron>
              <h1 className="display-3">你好，世界！</h1>
              <p className="lead">This is a simple shop.</p>
              <hr className="my-2"/>
              <p>It looks good!</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {
            AlbumJSON.map(product => (
              <Col xs="12" sm="6" md="4">
                <Card>
                  <CardImg top width="100%"
                           src={product.img}
                           alt="Card image cap"/>
                  <CardBlock>
                    <CardTitle>{product.title}</CardTitle>
                    <CardSubtitle>${product.price}</CardSubtitle>
                    <CardText>{product.desc}</CardText>
                    <Button color="success">Buy</Button>
                  </CardBlock>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    );
  }
}
