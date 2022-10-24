import { useSelector } from "react-redux";
import AverageDifficulty from "./AverageDifficulty";
import AverageFun from "./AverageFun";
import List from "./List";

const Layout = () => {
    const students = useSelector(state => state.students);

    const names = students.map(student => student.name);

    let uniqueNames = [...new Set(names)];


    return (
        <div className="layout">
            <List uniqueNames={uniqueNames} />
            <AverageFun uniqueNames={uniqueNames} />
            <AverageDifficulty uniqueNames={uniqueNames} />
        </div>
    );
}

export default Layout;