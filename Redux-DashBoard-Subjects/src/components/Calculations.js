import { useSelector } from "react-redux";

const Calculations = ({ uniqueSubjects }) => {
    const students = useSelector(state => state.students)

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

        const averageFun = (totalFun / amount).toFixed(1);
        //console.log("Average Fun:", averageFun);
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
            difficult: subjectDifficulty(subject)
        }
        return array

    });

    console.log("data", data)


    return (
        data
    );
}


export default Calculations;