## IMPORT AND EXPORT CSV TO NODEJS

https://www.youtube.com/watch?v=bBCurHtNX80

## SETUP APP

1. Copy the files in React-Redux Setup App
2. npm install
3. npm install react-csv --save

## Exporting from NodeJs to a SCV file (excel). Example 1. App1.js

Declare some data to scv file

1. - Create the array of data
2. - Create Headers
3. - Create a constanst to store (csvLink) csv files (excel), like this
4. - inside the return, call "csvLink" with spread notation (...)
     <CSVLink {...csvLink}>Export to CSV</CSVLink>

## Exporting from NodeJs to a SCV file (excel). Example 2. App.js

1. Google to get a fake rest API:
   https://jsonplaceholder.typicode.com/

2. Got to post
   https://jsonplaceholder.typicode.com/posts

3. Copy all the data to a file (data.js) created in components

4. src/App.js: Update csvLink
   data: data,
   N: Here we need to call this constant from components.

5. src/App.js: Update the headers
   N: Label I can choose the one I like and the "id" will correspond to the data I want to locate in that column.
