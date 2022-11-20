const sqlite3 = require('sqlite3').verbose();;

let db = new sqlite3.Database("todos" , (err) => {
    if(err)
    {
        console.log("Error Occurred - " + err.message);
    }
    else 
    {
        console.log("DataBase Connected");
    }
})
const createTableUsers=`CREATE TABLE users(
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    pwd TEXT NOT NULL
 )`;
 const createTableProject=`CREATE TABLE project(
    id INTEGER NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL
 )`;
 const createTabletodo=`CREATE TABLE todos(
    id INTEGER NOT NULL PRIMARY KEY,
    project_id INTEGER NOT NULL,
    task TEXT NOT NULL,
    status TEXT NOT NULL,
    finish_date TEXT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES project (id) 
            ON DELETE CASCADE ON UPDATE NO ACTION
 )`;
//db.run(createTableUsers)
//db.run(createTableProject)
//db.run(createTabletodo)

module.exports= db;