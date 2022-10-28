## 2. Display list of students and a dynamically chart correspondent to each student.

1. Make changes in the store:
   1.1 src/redux/wincDataSlice.js:
   initialState: {
   students: students,
   singleStudent: [],
   chekedStudents: [],
   },
   1.2 Create reducer (addNewStudent) to handle the array of a single student(lin 13 - 18)
   N: At this point I only console.log the action.payload to check the info I am getting from the App
   1.3 Export the reducer (lin 35)

2. src/components/: Create the elements to display the list of students:

- List.js
- StudentsListt.js

3. src/components/List.js
   3.1 Storage the whole array of students in a constant (lin 5)
   3.2 Map the array to get the names (lin 7)
   3.3 Create a constant with the single names (we have to delete repeated names). (lin 9)
   3.4 Return a <ul>
   3.5 Inside the <ul>, map the const of single names and send the key and name props to StudentsList

4. src/components/StudentsList.js:
   return the value name inside <p>

5. src/components/StudentsList.js: Create the eventHandler to send the name of the student to the sture so we can filter that name in the "students" array (all data) and we can deploy a chart of that single student
   5.1 onclick event witht the function in <p>
   onClick={() => addStudent(name)}

   5.2 Create dispatch
   5.3 Create function with dispatch and the reducer in order to send the value to the store (lin 8 - 11):
   dispatch(addNewStudent(name))
   5.4 Create a turnary operator so it will show me the list only when the data is at disposal:
   {name && <p

6. src/redux/wincDataSlice.js Finish the functionality of the reducer (addNewStudent).

7. src/SingleStudent.js DEploy the List of students and the chart that correspond to each student
   7.1 - Create a constant that storage the array of single student from the store:
   const oneStudent = useSelector(state => state.data.singleStudent)
   7.2 Return the List component.
   <List />
   7.3 - Return the chart with a conditional render so it will only show the chart when the date is there.
   {oneStudent.length > 1 && <Charts data={oneStudent} />}
