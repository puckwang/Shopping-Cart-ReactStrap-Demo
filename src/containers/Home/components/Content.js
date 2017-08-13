import React, {Component} from 'react';
import {
  Container, Row, Col, Button, Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, Badge, CardColumns, Table
} from 'reactstrap';
import AlbumJSON from './Album.json';

export default class Content extends Component {
  state = {
    modal: false,
    cart: [],
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addToCart = (prod) => {
    const newCart = this.state.cart;
    newCart.push(prod);
    this.setState({
      cart: newCart
    })
  };

  delToCart = (prod) => {
    const newCart = this.state.cart.filter(item => item.id !== prod.id);
    this.setState({
      cart: newCart
    })
  };

  checkout = (totalPrice) => {
    alert(`已結帳 ${totalPrice} 元`);
  }

  render() {
    const TotalPrice = this.state.cart.reduce((acc, item) => acc + item.price, 0);

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
                <Button color="primary" onClick={this.toggle}>購物車({this.state.cart.length})</Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <CardColumns>
          {
            AlbumJSON.map(product => (
              <Card>
                <CardImg top width="100%"
                         src={product.img}
                         alt="Card image cap"/>
                <CardBlock>
                  <CardTitle>{product.title}</CardTitle>
                  <CardSubtitle>
                    <h5>
                      {
                        product.discount ?
                          <Badge color="primary" pill>售價: ${product.price}</Badge> :
                          <Badge color="danger" pill>特價: ${product.price}</Badge>
                      }
                    </h5>
                  </CardSubtitle>
                  <CardText>{product.desc}</CardText>
                  <Button disabled={this.state.cart.find(item => item.id === product.id)} color="success"
                          onClick={() => this.addToCart(product)}>Buy</Button>
                </CardBlock>
              </Card>
            ))
          }
        </CardColumns>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
              <tr>
                <th>#</th>
                <th>品項</th>
                <th>價格</th>
                <th>{' '}</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.cart.map((prod, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                    <td><Button color="danger" size="sm" onClick={() => this.delToCart(prod)}>X</Button></td>
                  </tr>
                ))
              }
              </tbody>
            </Table>
            <p>總價: ${TotalPrice}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.checkout(TotalPrice)}>結帳</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
