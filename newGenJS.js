const newWayFn = ()=>{
    console.log("Something");
}
/*Using new function syntax for preventing this issues */
//newWayFn();


/*Using three dot operator to pack arguments as a string */
const threeDot = (...args)=>{
    console.log(args);
}
//threeDot(1,2,3,4,5,5);

/*Three dots operator is also useful for object and array appending */

let arrayA= Array.from({length:5},(v,i)=>i*2);

console.log(arrayA);

let arrayB= Array.from({length:5},(v,i)=>i+20);

console.log(arrayB);

/*Adding arrays */

let arrayC= [...arrayA,...arrayB];
console.log(arrayC);