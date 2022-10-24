import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";



const AverageFun = ({ uniqueNames }) => {
    const students = useSelector(state => state.students);
    //console.log("studenst in prueba", students)

    const studentFun = (name) => {
        //console.log("name", name)
        let totalFun = 0;
        students.forEach(student => {
            if (student.name === name) {
                totalFun += parseInt(student.fun);
            }
        });
        //console.log("Total fun", totalFun)
        const amount = students.filter(student => student.name === name)
            .length
        //console.log("amount", amount)

        const averageFun = (totalFun / amount).toFixed(1);
        //console.log("Average Fun:", averageFun);
        return averageFun
    }

    uniqueNames.map(name => studentFun(name));

    return (
        <div className="average-fun">
            <h3>Average Fun</h3>
            <ul className="fun-list">
                {uniqueNames.map((name, index) => (
                    <ItemsList key={index} aveFun={studentFun(name)} />
                )
                )}
            </ul>
        </div>
    );
}

export default AverageFun;