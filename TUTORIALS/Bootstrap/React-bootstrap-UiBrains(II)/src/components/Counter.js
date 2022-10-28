import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Counter = () => {
    const [state, setState] = useState({
        count: 0
    });

    const inc = () => {
        setState(
            { count: state.count + 1 }
        )
    };

    const dec = () => {
        setState(
            { count: state.count - 1 }
        )
    };





    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Body>
                                <p className="display-2">{state.count}</p>
                                <Button onClick={inc} variant="success" className="m-1">Increment</Button>
                                <Button onClick={dec} variant="warning">Decrement</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Counter;