// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less thn 10 console log "Small Number"

*/
console.log();
console.log();
console.log('//////////// START ///////////////')
console.log();
console.log();

//Method 1 Function
function checkWordSize(word){ 
    let myPromise = new Promise(function(myResolve, myReject) {
        let len = word.length;
        let res;
        if (len > 10) {
            res ='Big word';
        } else if (len < 10) {
            res ='Small Number';
        }
        myResolve(res);
      });
    return myPromise;
 }




let promise1 = checkWordSize("short");
let promise2 = checkWordSize("longassword");


//Method 2 Turnary
const checkWordSize2 = (word) => {

  let myPromise = new Promise(function(myResolve, myReject) {
    let len = word.length;
    let res = len > 10 ?'Big word.' :'Small Number.';
    myResolve(res);
  });
  return myPromise;
}

let promise3 = checkWordSize2("short");
let promise4 = checkWordSize2("longassword");

//Method 3 With else for exact 10 char string
const checkWordSize3 = (word) => {

  let myPromise = new Promise(function(myResolve, myReject) {
    let len = word.length;
    let res;
    if (len > 10) {
      res ='Big word';
    } else if (len < 10) {
        res ='Small Number';
    } else {
      myReject("WORD IS EXACTLY 10 charizards")
    }
    myResolve(res);
  });
  return myPromise;
}

const functionName = (parameters) => {
    //the function
}
function className(ctorParams){
    this.propertyName = 'value';
    this.function = () =>{

    };
}

let promise5 = checkWordSize3("short");
let promise6 = checkWordSize3("longassword");
let promise7 = checkWordSize3("1234567890");

/*
let promises = [promise6,promise5,promise3,promise4,promise2,promise1];

Promise.all(promises).then((val)=>{
    console.log('all', val);

}).catch(e=>{
    console.log('allcatch',e);
}).finally(()=>{});



try{
    //this is the code we are trying;
}
catch(e){
    // we do this when there is an error;
    // e is the error in question
}
finally{
    // do this last
}
*/



promise1.then(res=>{
 console.log('success', res);
})
.catch( e =>{
 console.log('fail', e);
});
promise2.then(res=>{
    console.log('success', res);
})
.catch( e =>{
    console.log('fail', e);
});
promise3.then(res=>{
    console.log('success', res);
})
.catch( e =>{
    console.log('fail', e);
});
promise4.then(res=>{
    console.log('success', res);
})
.catch( e =>{
    console.log('fail', e);
});
promise5.then(res=>{
    console.log('success', res);
})
.catch( e =>{
    console.log('fail', e);
});
promise6.then(res=>{
    console.log('success', res);
})
.catch( e =>{
    console.log('fail', e);
});
promise7.then(res=>{
    console.log('success', res);
 })
 .catch( e =>{
     console.log('fail', e);
 })
 .finally(()=>{
    console.log('End of Promises');
    console.log();
    console.log();
    console.log('//////////// FIN ///////////////');
    console.log();
    console.log();
});