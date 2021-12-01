import { useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink, Row } from "reactstrap";
import boult from '../images/boult.webp';
import charger from '../images/charger.webp';
import hp from '../images/hp.jpg';
import jbl from '../images/jbl.webp';
import lenovo from '../images/lenovo.jpg';
import macbook from '../images/macbook.jpg';
import powerbank from '../images/powerbank.jpg';
import axiosApi from "./url";

const Item = (props) => {
    return (

        <Col sm='12'>
            <Card className='mb-5'>
                <Container>
                    <Row>
                        <Col sm='6'>
                            <div className='imagecover'>
                                <img
                                    className='cardimage'
                                    alt="Itemimage"
                                    src={props.image}
                                />
                            </div>
                        </Col>
                        <Col sm='6'>
                            <CardBody>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {props.name}
                                </CardSubtitle>
                                <CardTitle tag="h5">
                                    {props.price}
                                </CardTitle>
                                <CardText>
                                    M.R.P.:  <strike>{props.oprice}</strike>  {props.off}% off
                                </CardText>
                                <CardTitle tag="h5">
                                    Quantity: {props.quantity}
                                </CardTitle>
                                <CardText className='mt-5'>
                                    <Button color='primary'>
                                        Track Order
                                    </Button>
                                </CardText>
                                <CardText>
                                    <Button color='danger'>
                                        Cancel Order
                                    </Button>
                                </CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Container>



            </Card>
        </Col>

    );
}

const CustomerOrders = (props) => {
    const [selected, setSelected] = useState(undefined);
    return (
        <>
            <Navbar
                dark expand='sm' className='shadow navbar' fixed='top'
            >
                <NavbarBrand href="/">
                    <strong>My Orders</strong>
                </NavbarBrand>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink href="/customer">
                            Dashboard
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    Logout
                </NavbarText>
            </Navbar>
            <Container className="customerdash">
                <Row>
                    <Item key={0} image={hp} name="HP Spectre x360 11th Gen Intel Core i5 13.5-inch(34.2 cm)" price="₹1,13,990.00" oprice="₹1,46,194.50" off={22} seller="Cloudtail Ltd." setSelected={setSelected} quantity={2} />
                    <Item key={6} image={charger} name="USB C Charger, Anker 20W PD Fast Charger, PowerPort III Charger" price="₹1490.00" oprice="₹1499.00" off={1} seller="Unicorn Ltd." setSelected={setSelected} quantity={3} />
                </Row>
            </Container>

        </>
    );
}
export default CustomerOrders;

