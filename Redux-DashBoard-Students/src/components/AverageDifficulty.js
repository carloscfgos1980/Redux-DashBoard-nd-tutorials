import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const AverageDifficulty = ({ uniqueNames }) => {
    const students = useSelector(state => state.students);
    const studentDifficulty = (name) => {
        //console.log("name", name)
        let totalDifficulty = 0;
        students.forEach(student => {
            if (student.name === name) {
                totalDifficulty += parseInt(student.difficulty);
            }
        });
        //console.log("Total fun", totalDifficulty)
        const amount = students.filter(student => student.name === name)
            .length
        //console.log("amount", amount)

        const averageFun = (totalDifficulty / amount).toFixed(1);
        //console.log("Average Fun:", averageFun);
        return averageFun
    }

    uniqueNames.map(name => studentDifficulty(name));
    return (
        <div className="average-difficulty">
            <h3>Average Difficulty</h3>
            <ul className="difficulty-list">
                {uniqueNames.map((name, index) => (
                    <ItemsList key={index} aveDifficulty={studentDifficulty(name)} />
                )
                )}
            </ul>
        </div>
    );
}

export default AverageDifficulty;