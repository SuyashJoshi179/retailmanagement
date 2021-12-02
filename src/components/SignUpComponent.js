import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button, Card, CardBody, CardText, Form, FormGroup, Input, Label } from "reactstrap";
const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [role, setRole] = useState("customer");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [redir, setRedir] = useState("");

    const handleSign = (e) => {
        e.preventDefault();
        var Headers = {
            "Content-Type": "application/json",
        }
        if(sessionStorage.getItem("token") && sessionStorage.getItem("token") !== 'undefined') Headers["Authorization"] = 'Token ' + sessionStorage.getItem("token");
        
        axios.post("http://127.0.0.1:8000/accounts/register_api/", {
            email: email,
            first_name: firstname,
            last_name: lastname,
            category: role,
            password: password,
            address: address,
        }, {
            headers: Headers
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                alert("SignUp Successful");
                setRedir(" ");
            } else {
                alert(res.statusText, res.status);
            }
        }).catch((res) => {
            if (res.response.status === 400 && res.response.data.password) {
                let s = "";
                res.response.data.password.forEach((i) => { s += i + "\n" });
                alert(s);
            } else {
                alert(res);
            }
        });
    }
    if (redir) {
        return (<Navigate to={`/${redir}`} />);
    } else {
        return (
            <div className="App">
                <div className="App-header">
                    <Card className='cardform'>
                        <CardBody>
                            <Form onSubmit={handleSign}>
                                <FormGroup>
                                    <Label for="email">
                                        <strong>Email</strong>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="example@abc.com"
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="firstname">
                                        <strong>First Name</strong>
                                    </Label>
                                    <Input
                                        id="firstname"
                                        name="firstname"
                                        placeholder="e.g. Peter"
                                        type="text"
                                        value={firstname}
                                        onChange={e => setFirstname(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastname">
                                        <strong>Last Name</strong>
                                    </Label>
                                    <Input
                                        id="lastname"
                                        name="lastname"
                                        placeholder="e.g. Parker"
                                        type="text"
                                        value={lastname}
                                        onChange={e => setLastname(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="role">
                                        <strong>Role</strong>
                                    </Label>
                                    <Input
                                        id="role"
                                        name="role"
                                        type="select"
                                        value={role}
                                        onChange={e => setRole(e.target.value)}
                                    >
                                        <option value="customer" >Customer</option>
                                        <option value="seller" >Seller</option>
                                        <option value="delivery_personnel" >Delivery Person</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Address">
                                        <strong>Enter Address</strong>
                                    </Label>
                                    <Input
                                        id="address"
                                        name="address"
                                        placeholder="Address"
                                        type="text"
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Password">
                                        <strong>Enter Password</strong>
                                    </Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <Button className="formbutton" type="submit">
                                    Sign Up
                                </Button>
                                <CardText className="signintext">
                                    Allready have an account? <strong><a href='/'>Sign In.</a></strong>
                                </CardText>
                            </Form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        );
    }
}
export default Signup;