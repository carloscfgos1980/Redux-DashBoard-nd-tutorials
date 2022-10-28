import { useDispatch } from "react-redux";
import { addCheckedStudent, removeUncheckedStudent } from "../redux/wincDataSlice";


const Input = ({ name, id }) => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);

        if (checked) {
            console.log("check in", value)
            dispatch(addCheckedStudent(value));
        } else {
            console.log("check out", value);
            dispatch(removeUncheckedStudent(value))
        }
    };

    return (
        <div className="input">
            <form className="">
                <div >
                    <input
                        className="ms-3"
                        type="checkbox"
                        value={name}
                        id={id}
                        onChange={handleChange}
                    />
                    <label
                        className="input-label"
                        htmlFor={id}
                    >
                        <h4 className="text-warning fw-bold p-1">{name}</h4>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Input;