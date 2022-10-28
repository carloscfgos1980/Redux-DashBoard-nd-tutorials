import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const AverageDifficulty = ({ uniqueSubjects }) => {
    const students = useSelector(state => state.students);
    const subjectDifficulty = (subject) => {
        //console.log("name", name)
        let totalDifficulty = 0;
        students.forEach(student => {
            if (student.subject === subject) {
                totalDifficulty += parseInt(student.difficulty);
            }
        });
        //console.log("Total fun", totalDifficulty)
        const amount = students.filter(student => student.subject === subject)
            .length
        //console.log("amount", amount)

        const averageFun = (totalDifficulty / amount).toFixed(1);
        //console.log("Average Fun:", averageFun);
        return averageFun
    }

    uniqueSubjects.map(subject => subjectDifficulty(subject));
    return (
        <div className="average-difficulty">
            <h3>Average Difficulty</h3>
            <ul className="difficulty-list">
                {uniqueSubjects.map((subject, index) => (
                    <ItemsList key={index} aveDifficulty={subjectDifficulty(subject)} />
                )
                )}
            </ul>
        </div>
    );
}

export default AverageDifficulty;