import { useSelector } from "react-redux";
import AverageDifficulty from "./AverageDifficulty";
import AverageFun from "./AverageFun";
import Calculations from "./Calculations";
import List from "./List";

const Layout = () => {
    const students = useSelector(state => state.students);

    const subjects = students.map(student => student.subject);
    let uniqueSubjects = [...new Set(subjects)];

    //console.log("subjects:", uniqueSubjects);

    //console.log(uniqueNames);

    return (
        <div>
            <div className="layout">
                <List uniqueSubjects={uniqueSubjects} />
                <AverageFun uniqueSubjects={uniqueSubjects} />
                <AverageDifficulty uniqueSubjects={uniqueSubjects} />
                <Calculations uniqueSubjects={uniqueSubjects} />
            </div>
            <div className="layout-2">

            </div>

        </div>
    );
}

export default Layout;