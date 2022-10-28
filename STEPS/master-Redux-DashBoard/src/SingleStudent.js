import List from "./components/List";
import Charts from "./components/Charts";
import { useSelector } from "react-redux";
import { Button } from 'react-bootstrap';

const SingleStudent = () => {
    const oneStudent = useSelector(state => state.data.singleStudent)
    console.log("single student:", oneStudent);
    return (
        <div className="students-data">
            <h1>Students_Data</h1>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="link">Link</Button>
            <div className="single-student">
                <List />
                {oneStudent.length > 1 && <Charts data={oneStudent} />}
            </div>
        </div>
    );
}

export default SingleStudent;