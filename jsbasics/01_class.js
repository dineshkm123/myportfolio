// const studentName="dinesh"
// let studentId=1234
// studentBranch="ise"
// studentBranch="cse"
// console.log(studentBranch);
// /*
// var in not used in js because var do not support block scope
  
// */
// console .table([studentId,studentName,studentBranch])
// const name="xyz "
// const  x= new String("asdfgh")
// console.log(x.__proto__)
// console.log(x.length)
// console.log(x.charAt(0))
// let y=new Date() 
//  console.log(y.toJSON())
// let z=  Date.now()
// console.log(z)
// // console.log((y.getMonth()))
// // console.log(typeof z)
// let m= new Array(1,2,3,4)
// console.log(m)
// console.log(m.unshift(6))
// // console.log(m)
// console.log(m.shift())
// // console.log(m)
// const arr=m.join(  )
// console.log(arr)
// this keyword is used to refer to the same object
const stud={
    name:"dinesh",
    sem:4
}
let t=stud.name
console.log(t)
const {name,sem}=stud
console.log(name,sem) 
console.log(this)

// immediately invoked function expression(IIFE)
 // (full function)() : syntax for IIFE
// in normal functions the internal variables are accesible for global object
// but in IIFE its not possible so to avoid manipulation of internal variables we use IIFE
 //*****java script execution */
// Js execution in single threaded execution
