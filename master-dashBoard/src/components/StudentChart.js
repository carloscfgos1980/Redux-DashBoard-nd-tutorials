import Charts from "./Charts";
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StudentChart = () => {
    const oneStudent = useSelector(state => state.data.singleStudent)
    console.log("single student:", oneStudent);
    const alumno = useSelector(state => state.data.alumno)
    return (
        <div className="bg-secondary">
            <h1 className="display-5 fw-bold text-center py-1">{alumno}</h1>
            <div className="text-end me-5 my-1">
                <Link to="/SingleStudent">
                    <Button variant="warning">atras</Button>{' '}
                </Link>
            </div>
            <div className="single-student">
                {oneStudent.length > 1 && <Charts data={oneStudent} />}
            </div>
        </div>
    );
}

export default StudentChart;