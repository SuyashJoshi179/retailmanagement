import { useState } from "react";
import { Button, Card, CardBody, CardText, Form, FormGroup, Input, Label } from "reactstrap";
const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSign = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <div className="App">
            <div className="App-header">
                <Card className='cardform'>
                    <CardBody>
                        <Form onSubmit={handleSign}>
                            <FormGroup>
                                <Label for="Username">
                                    <strong>Enter Email</strong>
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
                            <Button type='submit' className="formbutton">
                                Sign In
                            </Button>
                            <CardText className="signintext">
                                Don't have an account? <strong><a href='/signup'>Sign Up.</a></strong>
                            </CardText>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
export default SignIn;