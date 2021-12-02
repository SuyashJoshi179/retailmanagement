import axios from "axios";
import { useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink, Row } from "reactstrap";
import boult from '../images/boult.webp';
import charger from '../images/charger.webp';
import hp from '../images/hp.jpg';
import jbl from '../images/jbl.webp';
import lenovo from '../images/lenovo.jpg';
import macbook from '../images/macbook.jpg';
import powerbank from '../images/powerbank.jpg';

const MyModal = (props) => {
    const [quantity, setQuantity] = useState(1);
    const handleOrder = () => {
        var Headers = {
            "Content-Type": "application/json",
        }
        if(sessionStorage.getItem("token") && sessionStorage.getItem("token") !== 'undefined') Headers["Authorization"] = 'Token ' + sessionStorage.getItem("token");
        axios.post("http://127.0.0.1:8000/items/place_order/", {
            item: props.selected.prodkey,
            quantity: quantity,
        }, {
            headers: Headers
        })
            .then((res) => {
                if (res.status === 200) {
                    props.setSelected(undefined);
                    alert(`Order Placed for ${props.selected.name}`);
                }
            });
    }

    if (props.selected) {
        return (<Modal
            isOpen={props.selected ? true : false} size='lg' toggle={() => props.setSelected(undefined)}
        >
            <ModalHeader toggle={() => props.setSelected(undefined)}>
                Place Order
            </ModalHeader>
            <ModalBody>
                <Card>
                    <div className='imagecover'>
                        <img
                            className='cardimage'
                            alt="Itemimage"
                            src={props.selected.image}
                        />
                    </div>

                    <CardBody>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {props.selected.name}
                        </CardSubtitle>
                        <CardTitle tag="h5">
                            {props.selected.price}
                        </CardTitle>
                        <CardText>
                            M.R.P.:  <strike>{props.selected.oprice}</strike>  {props.selected.off}% off
                        </CardText>
                        <Form>
                            <FormGroup row >
                                <Col sm={6}>
                                    <Label for="quantity">
                                        Quantity :
                                    </Label>
                                </Col>
                                <Col sm={6}>
                                    <Input type="number" id="quantity" name="quantity" value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={handleOrder}
                >
                    Order
                </Button>
                {' '}
                <Button onClick={() => { props.setSelected(undefined) }}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>);
    } else {
        return (<></>);
    }
}

const Item = (props) => {

    const placehandler = (e) => {
        e.preventDefault();
        props.setSelected({
            image: props.image,
            name: props.name,
            price: props.price,
            oprice: props.oprice,
            off: props.off,
            seller: props.seller,
            prodkey: props.prodkey,
        });
    }

    return (

        <Col md="4" sm="6">
            <Card className='mb-5'>
                <div className='imagecover'>
                    <img
                        className='cardimage'
                        alt="Itemimage"
                        src={props.image}
                    />
                </div>

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
                    <Button onClick={placehandler}>
                        Buy Now
                    </Button>
                </CardBody>
            </Card>
        </Col>

    );
}

const Customer = (props) => {
    const [selected, setSelected] = useState(undefined);

    const logouthandle = () => {
        console.log("<a href='/' onClick={logouthandle} color='white'>Logout</a>");
        sessionStorage.setItem("token", undefined);
    }

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
                    <a href='/' onClick={logouthandle} color='white'><a href='/' onClick={logouthandle} color='white'>Logout</a></a>
                </NavbarText>
            </Navbar>
            <Container className="customerdash">
                <Row>
                    <Item prodkey={10} image={hp} name="HP Spectre x360 11th Gen Intel Core i5 13.5-inch(34.2 cm)" price="₹1,13,990.00" oprice="₹1,46,194.50" off={22} seller="Cloudtail Ltd." setSelected={setSelected} />
                    <Item prodkey={11} image={lenovo} name="Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6 inches FHD," price="₹60,990.00" oprice="₹85,290.00" off={28} seller="Cloudtail Ltd." setSelected={setSelected} />
                    <Item prodkey={12} image={macbook} name="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip" price="₹85,900" oprice="₹92,900" off={8} seller="Unicorn Ltd." setSelected={setSelected} />
                    <Item prodkey={13} image={powerbank} name="Ambrane 10000mAh Li-Polymer Powerbank with 12W Fast Charging" price="₹699.00" oprice="₹1,499.00" off={53} seller="Cloudtail Ltd." setSelected={setSelected} />
                    <Item prodkey={14} image={jbl} name="JBL C100SI by Harman Wired In Ear Headphones with Mic (Black)" price="₹799.00" oprice="₹1,299.00" off={38} seller="Cloudtail Ltd." setSelected={setSelected} />
                    <Item prodkey={15} image={boult} name="Boult Audio BassBuds X1 in-Ear Wired Earphones with 10mm" price="₹299.00" oprice="₹999.00" off={70} seller="Cloudtail Ltd." setSelected={setSelected} />
                    <Item prodkey={16} image={charger} name="USB C Charger, Anker 20W PD Fast Charger, PowerPort III Charger" price="₹1490.00" oprice="₹1499.00" off={1} seller="Unicorn Ltd." setSelected={setSelected} />
                </Row>
            </Container>
            <MyModal selected={selected} setSelected={setSelected} />

        </>
    );
}
export default Customer;

