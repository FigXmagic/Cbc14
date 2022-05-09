const fs = require('fs');
const path = require('path');


//had to switch the if and else to make this work, was giving error every time when I followed the directions
fs.access('./myNewFolder', fs.constants.F_OK, (err) => {
    if (err) {
        fs.mkdir('myNewFolder', (err) => {
            if (err) {
                console.log('error')
            }
        });
    }else{
        console.log('directory exists')
    }
});

fs.writeFile('./myNewFolder/hello.txt','hello world', (err) => {
    if (err){
    console.log(err);
    }
});


fs.readFile('./myNewFolder/hello.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }    
    console.log(data)
})