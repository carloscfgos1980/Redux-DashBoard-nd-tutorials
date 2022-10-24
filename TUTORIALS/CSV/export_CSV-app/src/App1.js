import './App.css';
import { useSelector } from "react-redux";
import React from "react";
import { CSVLink } from 'react-csv';

const App = () => {
    // Declare some data to scv file
    //I - Create the array of data
    const players = [
        {
            name: "Tom Latham", age: 29, team: "New Zealand"
        },
        {
            name: "Devon Conway", age: 30, team: "New Zealand"
        },
        {
            name: "Kane Williamson", age: 31, team: "New Zealand"
        },
        {
            name: "Will Young", age: 29, team: "New Zealand"
        }
    ];

    // II - Create Headers
    const headers = [
        {
            label: "Name", key: "name"
        },
        {
            label: "Age", key: "age"
        },
        {
            label: "Team", key: "team"
        }
    ]

    // III - Create a constanst to store (csvLink) csv files (excel), like this
    const csvLink = {
        headers: headers,
        data: players,
        filename: "csvfile.csv"
    }

    // IV - inside the return, call "csvLink" with spread notation (...)
    return (
        <div className="todo-list">
            <CSVLink {...csvLink}>Export to CSV</CSVLink>
        </div>
    );
}


export default App;