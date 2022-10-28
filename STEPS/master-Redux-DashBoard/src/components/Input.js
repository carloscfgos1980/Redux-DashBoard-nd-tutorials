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
            <form className="input-form">
                <div >
                    <input
                        className="input-checkbutton"
                        type="checkbox"
                        value={name}
                        id={id}
                        onChange={handleChange}
                    />
                    <label
                        className="input-label"
                        htmlFor={id}
                    >
                        {name}
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Input;