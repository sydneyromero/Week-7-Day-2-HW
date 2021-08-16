//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



//typeof function

let doTheThing = (thing) => {
    // The typeof operator returns a string indicating the type of the unevaluated operand.
    let propType = typeof(thing);//Tyeof and =/= typeOf sucks ass and dies 

    if(propType === 'string'){
        console.log(thing);
        return;
    }
    else if(propType === 'object'){//SECRET SECREETS ===
        if(Array.isArray(thing)){
            for(let i = 0; i <= thing.length; i++){ // (declare variable name; set end condition; set increment)
                doTheThing(thing[i]);
            }
        }
        else if(thing){
            foodShare(thing);
        }
        return;
    }
    else{
        return;
    }
}
let foodShare = (person) =>  {
    for(let key in person){
        // The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property
        if(person.hasOwnProperty(key)){
            let prop = person[key];
            doTheThing(prop);
        }
    }
};

foodShare(person3);


    // switch(propType){
    //     case 'object':
    //         if(Array.isArray(thing)){
    //             for(let i = 0; i <= thing.length; i++){
    //                 doTheThing(thing[i]);
    //             }
    //         }
    //         else if(thing){
    //             foodShare(thing);
    //         }
    //         return;
    //     case 'string':
    //         console.log(thing);
    //         return;
    //     default:
    //         return;
    // }



// for(;;){

// }

// for(let i = 10; i<100; ()=>{
//    console.log('ran the loop');
//    let inc = Math.floor(Math.random() * 10);
//    console.log("number to incremtn", inc);
//    i+=inc;
// }){
//    console.log('sheeeeeeeeeeeeeeeesh');
// }
/*
let i = 0;
while(i<10){
    console.log('sheeesh');
    i++;
}

let test = true;
while(test){


    test = false;
}

console.log(1 == '1')  // true
console.log(1 === '1') // false
*/




//instance off
// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.
//to help segment food from list
// list vs object iteration