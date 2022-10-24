import { useSelector } from "react-redux";


const students = useSelector(state => state.students);
console.log("array of students:", students);
console.log("how fun was it:", students[0].name);

let totalFun = 0;
let totalDifficulty = 0;

const amount = students.length;

console.log("amount:", amount);

students.forEach(student => {
    totalFun += parseInt(student.fun);
    totalDifficulty += parseInt(student.difficulty);

});
console.log("total fun:", totalFun);
console.log("total difficulty:", totalDifficulty);

const mediaFun = (totalFun / amount).toFixed(1);
console.log("mediaFun:", mediaFun);

const mediaDifficulty = (totalDifficulty / amount).toFixed(1);
console.log("media difficulty:", mediaDifficulty)


let evelynFun = 0;
let evelynDifficulty = 0;

const evelyn = students.forEach(student => {
    if (student.name === "Evelyn") {
        evelynFun += parseInt(student.fun);
        evelynDifficulty += parseInt(student.difficulty);
    }
});
const evelynMediaFun = (evelynFun / (amount / 10)).toFixed(1);
console.log("Evelyn media Fun:", evelynMediaFun);

const evelynMediaDifficulty = (evelynDifficulty / (amount / 10)).toFixed(1);
console.log("Evelyn MEdia difficulty:", evelynMediaDifficulty)