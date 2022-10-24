1. Download xlsx (excel) to my laptop in CSV file:
   https://docs.google.com/spreadsheets/d/1BHjq5MjpuSItvVbnQcEdQt_v956-Ks1lr3f_nEFkTks/edit#gid=0

2. Transform CSV to JS
   https://www.convertsimple.com/convert-csv-to-javascript-array/
   N: A mentor gave me tip.

3. Copy the output.js file into components.

4. Change the name variable in the array in output.js
   N: The name they have was uncompatible with JS coz it has space.

5. Store the array in a constant and export it as default.

6. Build the store(redux folder).

7. src/components/Layout.js: Get the array of the subjects:

7.1 Storage the whole data in the "students" constant
const students = useSelector(state => state.students);
7.2 Create the array of students. I need to eliminate from the array the repeated subjects!
const subjects = students.map(student => student.subject);
let uniqueSubjects = [...new Set(subjects)];

8.  src/components/Layout.js: Return the reuseable components and pass the array of subjects as props

               <List uniqueSubjects={uniqueSubjects} />
                <AverageFun uniqueSubjects={uniqueSubjects} />
                <AverageDifficulty uniqueSubjects={uniqueSubjects} />
                <Calculations uniqueSubjects={uniqueSubjects} />

9.  src/components: Create the components
    List.js
    AverageFun.js
    AverageDifficulty.js
    Calculations.js
    ItemsList.js

10. src/components/List.js: Lopping thru the array of subjects.
    10.1 - Get the argument as props of the subjects array:
    const List = ({ uniqueSubjects }) => {
    10.2 - Looping in order to print the name on the DOM, we need to return a component (ItemsList) and pass an argument as props (subject={subject})

11. src/components/ItemsList.js:
    11.1 - get the props (subject).
    11.2 Display the subjects as paragh inside the unorderlist(ul) that is in the parent component (List.js). It has to be done with a render condictional coz this very same reuseable component will be used in others components:
    {subject && <p>{subject}</p>}
    11.3 - Repeat the previous step to get average-of-fun (aveFun) and difficulty (aveDifficulty)

12. src/components/AverageFun.js:
    N: Aki fue donde me trabe bastante pues despues de crear con exito una funcion para calcular el averga fun of all the students. I need to find a way to loop thru the students array. Since I just copied the function from the "shoppingCart-app"It didnt work! I had to make some adjustments like, in the shoppingCart functionality, get ride of the if condiction and also the filer (include). I took me some time but I got it. Check for the explanation in the file.

13. src/components/AverageDifficulty.js
    N: Same functionality, just change "student.fun" for "student.difficulty". Also the name of some variable to gain in clarity and self-explanation.

14. src/components/Calculations.js: Get the array of subjects so I could apply it on the chart. This component is not necessary for this particular app. I just used to ge the functionality for "master-Redux-DashBoard".
