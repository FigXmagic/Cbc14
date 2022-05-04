//1//
function promise1() {
    //------2-------// //-----3------//
    return new Promise((resolve, reject) => {
    //4//
    resolve();
    })
};

//--5--//
promise1()   //--------------6------------------//
.then(() => { console.log('success') })
.catch(() => { console.log('there was an error')})

//-----------7--------------//
function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        //------8------//
        if(errorBoolean) {
        //------------------9-------------------//
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}

//--------------10----------------//
promise2(true)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})

promise2(false)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})

//---------------------------------------11----------------------------------------//
const promise3 = new Promise((resolve, reject) => { resolve('promise 3 complete') });

//--------------------------------------------12---------------------------------------------//
/* const promise4 = new Promise((resolve, reject) => { reject('There was an error w/ promise 4')}); */

////---------------------------------------16----------------------------------------////
const promise4 = new Promise((resolve, reject) => { resolve('Promise 4 complete') });

//---------------------------------------13----------------------------------------//
const promise5 = new Promise((resolve, reject) => { resolve('promise 5 complete') });
/* console.log(promise5) */


//--------------14----------------//
/* promise3
.then(data => { console.log(data) })
.catch(err => { console.log(err) }) */

//--------------15----------------//
////--------------17----------------////
Promise.all([promise3, promise4, promise5])
.then(data => { console.log(data) })
.catch(err => { console.log(err) })

//----------18-----------------//
let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.icndb.com/jokes/15', true);

xhr.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};

xhr.send();