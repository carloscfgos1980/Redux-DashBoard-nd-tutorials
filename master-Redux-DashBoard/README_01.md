## Creating functionality:

# 1. Display the Chart average Fun and Difficulty of all students.

# 2. Display list of students and a dynamically chart correspondent to each student.

# 3. Display a Check box of all students and a dynamically chart that shows average fun and dicifficult of one or more students.

## 1. Display the Chart average Fun and Difficulty of all students

1. src/Home.js: Copy the functionality to the the calculations
   1.1 "Redux-DashBoard-Subjects/src/components/Calculations.js"

# Check README.md for explanation.

1.2 From "Redux-DashBoard-Subjects/src/components/: copy also
const subjects = students.map(student => student.subject);
let uniqueSubjects = [...new Set(subjects)];
This give me the data of all the subjects students evaluation of fun and degree of difficulty.

1.3 Return Charts and pass the data as argument
<Charts data={data} />

2.  src/components: Create "Charts.js"

3.  Create the chart
    8.1 - type sfc""and press key "tab" to create the elements in the functional component (Charts.js).
    8.2 - Copy the chart elements. From "Recharts/App.js: Copy everything in the return in order to create the chart. Check README.md fil in Charts for explanation.
    8.3 - Make the adjustment to the chart so it will show the data I want.

        <XAxis dataKey="subject" tick={{ fontSize: "8px" }} />

                    <Bar dataKey="fun" fill="#f1356d" />
                    <Bar dataKey="difficult" fill="lightgreen" />
