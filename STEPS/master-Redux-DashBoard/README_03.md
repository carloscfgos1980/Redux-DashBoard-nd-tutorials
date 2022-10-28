## Create the List of students with input field and a chart that shows fun and difficulty. The DAta will will added dynamically.

1. src/redux/wincDataSlice.js: MAke changes on the store so we can handle the data of one or more student
   1.1 - Create 2 reducers(only with console.log to check the payload):

- addCheckedStudent (check box checked)
- removeUncheckedStudent (check box unchecked)

  1.2 - Export the reducers:
  export const { addNewStudent, addCheckedStudent, removeUncheckedStudent } = wincDataSlice.actions;
  N: The const above is called distressed function, it saves us a lot of work.
  This is the distressed way:
  const { addNewStudent, addCheckedStudent, removeUncheckedStudent } = wincDataSlice.actions;

This is the NOT distressed way. A lot more typing which creates bugs!
const addNewStudent = wincDataSlice.actions.addNewStudent;
const addCheckedStudent = wincDataSlice.actions.addCheckedStudent;
const removeUncheckedStudent = wincDataSlice.actions.removeUncheckedStudent

2. src/SliceDicingData.js Get the values from single studen array from the store and pass it to Input.js
   2.1 - Storage in a constant all the data (students)from the store:
   const students = useSelector(state => state.data.students);

2.2 - Get a list of one element (name) by mapping student:
const names = students.map(student => student.name);

2.3 - Get an array with the name. We need to delete repeated names:
let uniqueNames = [...new Set(names)];

2.4 - Return <Input/> and pass the props:
<Input key={index} name={name} id={index} />

3. src/components/ Create "Input.js" file

4. src/components/Input.js: Create the form (23 - 40)
   4.1 - The "id" has to be the same as "htmlFor" so it will fire tha eventHandler either if we click in the check box or in the ext next to it. Both element ar deply dynamically
   id={id}
   htmlFor={id}

5. src/components/Input.js: Create the eventHandler in order to send the data to the store
   5.1 - Create the eventHandler on the input field:
   onChange={handleChange}

5.2 - Create the function that will handle the event (handleChange):
N: We need to create a condiction so it will send an info to the store when the check box is clicked and when it unclicked, We do by dispatching actions (lin 8 - 19)

6. src/redux/wincDataSlice.js: Finish the functionality of the reducers for the check box.
   It is important to have the reducers already creaty coz it helps to importe them we are dispatching an action.
   6.1 create in the initialState a constant with an empty array
   chekedStudents: [],
   6.2 - In "addCheckedStudent" I used push method to create an array of the previos elements (state) and add the new element from the App (payload) (lin 19 - 23):
   state.chekedStudents.push(name);

6.3 - In "removeUncheckedStudent" reducer (lin 24 -30):
6.3.1 - Create a variable that will filter out the element from the array:
let removedStudent = state.chekedStudents.filter(student => student !== name);

- N: Here I had a bug that took me a lot of time to fig it out. Since I copied this functio from other app I was using spread notation to acces to the name like it was an array of objest but I was dealing just with a simple array so spread notation was not need

  6.3.2 - retrun a new state:
  state.chekedStudents = removedStudent;

7. src/SliceDicingData.js Copy the same functionability in srx/Home.js
   N: I need to change "subjects" for "name". This provoke a few bugs until I fig it out.

8. Return the Chart with a conditional render and pass the props to Charts:
   {chekedStudents.length >= 1 && <Charts data={data} />}

9. This ENDS all the functionability. I need to work on the styling now. Learning from bootstrap
