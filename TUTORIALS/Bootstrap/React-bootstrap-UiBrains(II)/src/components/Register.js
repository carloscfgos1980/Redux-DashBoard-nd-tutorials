import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
    const [state, setState] = useState({
        user: {
            username: '',
            email: '',
            password: ''
        }
    });
    const updateInput = (e) => {
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }
        })
    }
    const register = (e) => {
        e.preventDefault();
        console.log(state.user)
    }
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col xs={3}>
                        <Card className="shadow-lg">
                            <Card.Header className="p-3" style={{ backgroundColor: '#ffc107' }}>
                                <h4>Register</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="username"
                                            onChange={updateInput}
                                            className="mb-3" type='text' placeholder="Username" />
                                        <Form.Control
                                            name="email"
                                            onChange={updateInput}
                                            className="mb-3" type='text' placeholder="Email" />
                                        <Form.Control
                                            name="password"
                                            onChange={updateInput}
                                            className="mb-3" type='text' placeholder="Password" />
                                        <Button
                                            onClick={register}
                                            variant="warning" type="submit">Register</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Register;