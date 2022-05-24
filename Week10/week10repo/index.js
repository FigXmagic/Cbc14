const express = require('express');
const app = express();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'media'
});

connection.connect((err) =>{
        if (err){
        console.log(err)
        }else{
        console.log('connected');
        }

    var sql1 = "INSERT INTO `books` (`book_title`, `book_author`) VALUES ('Thinking In Numbers: On Life, Love, Meaning, and Math', 'Daniel Tammet');";
    connection.query(sql1,(err) => {
        if (err){ 
            console.log(err)
        }else{
            console.log('record inserted');
        }
    });

    var sql2 = "SELECT * FROM `movies`;";
    connection.query(sql2,(err, results) => {
        if (err){ 
            console.log(err)
        }else{
            console.log(results);
        }
    });

    var sql3 = "UPDATE `music` SET `music_title` = 'Ripple', `release_date` = '1970/12/21' WHERE `music_id` = 2;";
    connection.query(sql3,(err) => {
        if (err){ 
            console.log(err)
        }else{
            console.log('record updated');
        }
    });

    var sql4 = "DELETE FROM movies WHERE `movie_id` = 6;";
    connection.query(sql4,(err) => {
        if (err){ 
            console.log(err)
        }else{
            console.log('record deleted');
        }
    });

  connection.end();
});



