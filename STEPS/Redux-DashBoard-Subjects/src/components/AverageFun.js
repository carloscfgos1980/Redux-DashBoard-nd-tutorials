import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";



const AverageFun = ({ uniqueSubjects }) => {
    const students = useSelector(state => state.students);
    //console.log("studenst in prueba", students)

    const subjectFun = (subject) => {
        //console.log("name", name)
        let totalFun = 0;
        students.forEach(student => {
            if (student.subject === subject) {
                totalFun += parseInt(student.fun);
            }
        });
        //console.log("Total fun", totalFun)
        const amount = students.filter(student => student.subject === subject)
            .length
        //console.log("amount", amount)

        const averageFun = (totalFun / amount).toFixed(1); // to get one place after the colon(coma)
        //console.log("Average Fun:", averageFun);
        return averageFun
    }

    //uniqueSubjects.map(subject => subjectFun(subject));

    return (
        <div className="average-fun">
            <h3>Average Fun</h3>
            <ul className="fun-list">
                {uniqueSubjects.map((subject, index) => (
                    <ItemsList key={index} aveFun={subjectFun(subject)} />
                )
                )}
            </ul>
        </div>
    );
}

export default AverageFun;