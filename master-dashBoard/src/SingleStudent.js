import { useSelector } from "react-redux";
import TableStudents from "./components/TableStudents";
import StudentsList from "./components/TableStudents";

const SingleStudent = () => {
    const students = useSelector(state => state.data.students);
    const dataStudents = students.filter(student => student.subject === "SCRUM");

    return (
        <div className="bg-light">
            <h3 className="display-5 py-2 text-center">Students</h3>
            <TableStudents />
        </div>
    );
}

export default SingleStudent;