import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink, Row } from "reactstrap";
import boult from '../images/boult.webp';
import charger from '../images/charger.webp';
import hp from '../images/hp.jpg';
import jbl from '../images/jbl.webp';
import lenovo from '../images/lenovo.jpg';
import macbook from '../images/macbook.jpg';
import powerbank from '../images/powerbank.jpg';

const Item = (props) => {
    const ar = [hp, lenovo, macbook, powerbank, jbl, boult, charger];
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      });
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
                                    src={ar[props.itemkey]}
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
                                    Total Cost: {formatter.format(props.price)}
                                </CardTitle>
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
    const [data, setData] = useState(undefined);
    var Headers = {
        "Content-Type": "application/json",
    }
    if(sessionStorage.getItem("token") && sessionStorage.getItem("token") !== 'undefined') Headers["Authorization"] = 'Token ' + sessionStorage.getItem("token");
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/items/get_customer_orders/',{
            headers: Headers}).then(json => setData(json.data))
    }, []);

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
                    <a href='/' onClick={logouthandle} color='white'>Logout</a>
                </NavbarText>
            </Navbar>
            <Container className="customerdash">
                <Row>
                    {data ? data.map((item) => 
                        <Item
                            itemkey={item.item - 10}
                            name={item.item_name}
                            price={item.cost}
                            quantity={item.quantity}
                        />
                    )
                    : <></>}
                </Row>
            </Container>

        </>
    );
}
export default CustomerOrders;

