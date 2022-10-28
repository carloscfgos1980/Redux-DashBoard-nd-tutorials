import { useDispatch } from "react-redux";
import { addNewStudent } from "../redux/wincDataSlice";


const StudentsList = ({ name }) => {
    const dispatch = useDispatch();

    const addStudent = () => {
        console.log("student:", name)
        dispatch(addNewStudent(name))
    }
    return (
        <div className="item-list">
            {name && <p
                onClick={() => addStudent(name)}
                value={name}
            >{name}</p>}
        </div>
    );
}

export default StudentsList;