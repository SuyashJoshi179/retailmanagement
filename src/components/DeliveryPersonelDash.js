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
                                        Item Name
                                    </th>
                                    <th>
                                        Customer Name
                                    </th>
                                    <th>
                                        Address
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        HP Spectre x360 11th Gen Intel Core i5 13.5-inch(34.2 cm)
                                    </td>
                                    <td>
                                        Suyash Joshi
                                    </td>
                                    <td>
                                        Pune
                                    </td>
                                    <td>
                                        2
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        USB C Charger, Anker 20W PD Fast Charger, PowerPort III Charger
                                    </td>
                                    <td>
                                        Suyash Joshi
                                    </td>
                                    <td>
                                        Pune
                                    </td>
                                    <td>
                                        3
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

