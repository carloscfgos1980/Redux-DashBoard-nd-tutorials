import './App.css';
import React from "react";
import { CSVLink } from 'react-csv';
import data from './components/Data';

const App = () => {
  // Declare some data to scv file
  //I - Create the array of data


  // II - Create Headers
  const headers = [
    {
      label: "1", key: "userId"
    },
    {
      label: "2", key: "id"
    },
    {
      label: "3", key: "title"
    }
  ]

  // III - Create a constanst to store (csvLink) csv files (excel), like this
  const csvLink = {
    headers: headers,
    data: data,
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