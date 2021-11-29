import { Button, Card, CardBody, CardText, Form, FormGroup, Input, Label } from "reactstrap";
const Customer = (props) => {
    return (
        <div className="App">
            <div className="App-header">
                <Card className='cardform'>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="Username">
                                    <strong>Enter Username</strong>
                                </Label>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    type="text"
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
                                />
                            </FormGroup>
                            <Button className="formbutton">
                                Submit
                            </Button>
                            <CardText className="signintext">
                                Don't have an account? <strong><a href='/'>Sign Up.</a></strong>
                            </CardText>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
export default Customer;