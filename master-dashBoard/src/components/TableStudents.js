import { useDispatch, useSelector } from "react-redux";
import { addNewStudent } from "../redux/wincDataSlice";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table } from "react-bootstrap";


const TableStudents = () => {

    const students = useSelector(state => state.data.students);
    const dataStudents = students.filter(student => student.subject === "SCRUM");

    const dispatch = useDispatch();
    const addStudent = (value) => {
        console.log("name", value)

        dispatch(addNewStudent(value));
    }
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Table striped bordered hover className="shadow-lg text-center">
                            <thead>
                                <tr>
                                    <th>Nr</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>City</th>
                                    <th>Origin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataStudents.map((student, index) => {
                                    let nr = index + 1;
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {nr}
                                            </td>
                                            <Link to='name-of-student'>
                                                <td
                                                    onClick={() => addStudent(student.name)}
                                                    value={student.name}
                                                >{student.name}</td>
                                            </Link>
                                            <td>{student.age}</td>
                                            <td>{student.city}</td>
                                            <td>{student.origin}</td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default TableStudents;

/*

                                    <Link to='name-of-student'>
                                        <td
                                            onClick={() => addStudent({ student.name })}
                                            value={name}
                                        >{student.name}</td>
                                    </Link>




                                <tr key={nr}>
                                    <td>
                                        {numbers}
                                    </td>
                                    <Link to='name-of-student'>
                                        <td
                                            onClick={() => addStudent({ name })}
                                            value={name}
                                        >{name}</td>
                                    </Link>
                                    <td>{age}</td>
                                    <td>{city}</td>
                                    <td>{origin}</td>
                                </tr>
*/