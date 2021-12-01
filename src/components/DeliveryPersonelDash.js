import { useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink, Row, Table } from "reactstrap";
import boult from '../images/boult.webp';
import charger from '../images/charger.webp';
import hp from '../images/hp.jpg';
import jbl from '../images/jbl.webp';
import lenovo from '../images/lenovo.jpg';
import macbook from '../images/macbook.jpg';
import powerbank from '../images/powerbank.jpg';
import axiosApi from "./url";

const Delivery = (props) => {
    const [selected, setSelected] = useState(undefined);
    return (
        <>
            <Navbar
                dark expand='sm' className='shadow navbar' fixed='top'
            >
                <NavbarBrand href="/">
                    <strong>Dashboard</strong>
                </NavbarBrand>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink href="/orders">
                            My Orders
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>
                    Logout
                </NavbarText>
            </Navbar>
            <Container className="customerdash">
                <Row>
                    <Col sm='12'>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Username
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        Mark
                                    </td>
                                    <td>
                                        Otto
                                    </td>
                                    <td>
                                        @mdo
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        Jacob
                                    </td>
                                    <td>
                                        Thornton
                                    </td>
                                    <td>
                                        @fat
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        Larry
                                    </td>
                                    <td>
                                        the Bird
                                    </td>
                                    <td>
                                        @twitter
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default Delivery;

