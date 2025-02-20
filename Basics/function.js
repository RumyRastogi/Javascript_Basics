function SayHello(){
    console.log("Hello regular function");

}

const Hello = () =>// with no arguments
{
    console.log("Hello arrow function");
}

SayHello();

Hello();
//With one parameter

function greet(name) {
    console.log("Hello, " + name + "!");
  }

  const greet1 = (name) =>{
    console.log(`my name is ${name}`);
  }

  greet1("Rumy");

  //With two parameter

  const add = (a,b) =>{
    return a+b;
  }

  console.log(add(3,7));

  function calculatecarprice(val1,val2,...num)
  {
    return val1,val2,num;
  }

  console.log(calculatecarprice(200,600,800,1000));// we can solve it with rest opretor


  const user = {
    name:"Rumy",
    age:38
  }
  
  function handleobject(anyobject)
  {
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
    
  }

 // handleobject(user);

 handleobject({name:"Paras",
  age:42
 })

 const mynewarr = [300,800,700];
 function returnsec(getarray)
 {
  return getarray[1];
 }
 console.log(returnsec(mynewarr));