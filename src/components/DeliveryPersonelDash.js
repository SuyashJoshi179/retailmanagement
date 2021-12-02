import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Navbar, NavbarBrand, NavbarText, Row, Table } from "reactstrap";

const Delivery = (props) => {
    const [data, setData] = useState([])
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });
    useEffect(() => {
        var Headers = {
            "Content-Type": "application/json",
        }
        if(sessionStorage.getItem("token") && sessionStorage.getItem("token") !== 'undefined') Headers["Authorization"] = 'Token ' + sessionStorage.getItem("token");
        axios.get('http://127.0.0.1:8000/items/get_dp_orders/', {
            headers: Headers
        }).then(json => setData(json.data))
    }, [])

    const convvertdate = (s) => {
        const D = new Date(s);
        return (`${D.toDateString()}   ${D.toLocaleTimeString()}`);
    }

    const renderTable = () => {
        return data.map((item, index) => {
            return (
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.item_name}</td>
                    <td>{formatter.format(item.cost)}</td>
                    <td>{convvertdate(item.delivery_time)}</td>
                    <td>{item.quantity}</td>
                    <td>{item.first_name}</td>
                    <td>{item.address}</td>
                </tr>
            )
        })
    }

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
                <NavbarText>
                    <a href='/' onClick={logouthandle} color='white'>Logout</a>
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
                                        Cost
                                    </th>
                                    <th>
                                        Delivery Time
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Customer's Name
                                    </th>
                                    <th>
                                        Address
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTable()}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default Delivery;

