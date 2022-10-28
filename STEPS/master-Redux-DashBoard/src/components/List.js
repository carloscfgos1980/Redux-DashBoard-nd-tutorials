import { useSelector } from "react-redux";
import StudentsList from "./StudentsList";

const List = () => {
    const students = useSelector(state => state.data.students);

    const names = students.map(student => student.name);

    let uniqueNames = [...new Set(names)];


    return (
        <div className="list">
            <h3>Students:</h3>
            <ul className="name-list">
                {uniqueNames.map((name, index) => (
                    <StudentsList key={index} name={name} />
                )
                )}
            </ul>
        </div>
    );
}

export default List;