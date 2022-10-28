import { useSelector } from "react-redux";
import Charts from "./components/Charts";

const Home = () => {
    const students = useSelector(state => state.data.students);
    const subjects = students.map(student => student.subject);
    let uniqueSubjects = [...new Set(subjects)];

    const subjectFun = (subject) => {
        let totalFun = 0;
        students.forEach(student => {
            if (student.subject === subject) {
                totalFun += parseInt(student.fun);
            }
        });
        const amount = students.filter(student => student.subject === subject)
            .length;

        const averageFun = (totalFun / amount).toFixed(1);
        return averageFun
    }

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


    const data = uniqueSubjects.map(subject => {
        const array = {
            subject: subject,
            fun: subjectFun(subject),
            difficulty: subjectDifficulty(subject)
        }
        return array

    });

    //console.log("realdata", data)
    return (
        <div className="bg-secondary">
            <h1 className="display-5 text-center text-orange py-5 fw-bold">Winc Academy Chart</h1>
            <Charts data={data} />
        </div>
    );
}

export default Home;