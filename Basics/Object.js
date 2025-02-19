const jsUser = {
    name:"Rumy",
    age:38,
    email:"rumyrastogi@gmail.com",
    hobies:["Drawing","Painting","Singing","Dancing"],
    isLoggedIn:true,

}

// console.log(jsUser.name);

// console.log(jsUser["name"]);

// console.log(`Hello,My name is ${jsUser.name}. and my age is ${jsUser.age} Years .`);

// jsUser.email="rumyrastogi31@gmail.com";

//Object.freeze(jsUser);//freeze method 

jsUser.email="rumyrastogi@google.com";

jsUser.greeting = function(){
    console.log("Hello Js Users");    
}

console.log(jsUser.greeting());

console.log(jsUser);


const person = new Object();
person.firstpName="Rumy";
person.lastName="Rastogi";
person.age=38;
person.eyecolor="brown";

console.log(`My name is ${person.firstpNamename} ${person.lastName}`);


const namenew = [ {fname:"Rumy",lname:"Rastogi"},{fname:"Rayna",lname:"Goel"},{fname:"Reha",lname:"Goel"}];// Objects in the Array
console.log(namenew[0].fname);


const course ={
    courseName:"Javascript",
    price:"999",
    teacher:"Hitesh"
}

console.log(course.teacher);
const {teacher: Guide} = course;// object Destructure // this is important , we will use it in React
console.log(Guide);

