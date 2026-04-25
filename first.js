// //variable declaration and initialization
// {
//     Name = "John Doe";
// console.log(Name);
// age = 30;
// console.log(age);
// age=age+1;
// console.log(age);
// console.log("Hello, " + Name + "! You are " + age + " years old.");
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// isfollowing=true;
// console.log(isfollowing);
// }

// //variable naming conventions
// {
// fullname="zahid";
// console.log(fullname);
// fullName="zahid hasan";
// console.log(fullName);

// _fullName="zahid hasan";
// console.log(_fullName);


// let name= "Ayesha";
// console.log(name);

// const PI=3.14;
// console.log(PI);
// }
// {
//     let name="hasan";
//     console.log(name);  
// }

// //different data types
// let Age=20;
// let price=99.99;

// let X=BigInt("123456789012345678901234567890");
// let Y = Symbol("Zahid");

// //object with different data types
//     const student={
//         name:"Zahid",
//         age:25,
//         marks:[85,90,95],
//         isPass:true
//     };

// console.log(student["age"]+1);
    
// //object with different data types
// const product={
//     name:"parker Jotter Standard CT ballpoint pen",
//     rating:4,
//     isdeal:true,
//     price:270,
//     offer:"5% off",
//     inStock:true
// };

// //operators
// let A=5;
// console.log("++A = " + ++A);

// let B=5;
// console.log("B = " + B);
// console.log("B+=3 = " + (B+=3));

// let C=5;
// console.log("C = " + C);
// console.log("C*=2 = " + (C*=2));

// let D=5;
// console.log("D = " + D);
// console.log("D-=2 = " + (D-=2));

// let E=5;
// console.log("E = " + E);
// console.log("E%=3 = " + (E%=3));

// let F=5;
// console.log("F = " + F);
// console.log("F**=2 = " + (F**=2));

// //comparison operators
// let num1=10;
// let num2=20;
// console.log("num1 > num2: " + (num1 > num2));
// console.log("num1 < num2: " + (num1 < num2));
// console.log("num1 == num2: " + (num1 == num2));
// console.log("num1 != num2: " + (num1 != num2));
// console.log("num1 === num2: " + (num1 === num2));

// let A1=5;
// let B1="5";
// console.log("A1 == B1: " + (A1 == B1));
// console.log("A1 === B1: " + (A1 === B1));

//logical operators
// let a =4;
// let b=5;
// let cond1= a>3 && b<10;
// console.log("cond1: " + cond1);

// let cond2= a>3 || b<4;
// console.log("cond2: " + cond2);

// let cond3= !(a>3);
// console.log("cond3: " + cond3);

//conditional statements
// let color;
// if(color==="red")
// {
//     console.log("The color is red.");
// }
// else if(color==="blue")
// {
//     console.log("The color is blue.");
// }
// else
// {
//     console.log("The color is neither red nor blue.");
// }

// let num = prompt("Enter a number:");
// if(num >= 80 && num <= 100)
// {    
//     console.log("Grade: A");
// }   
// else if(num >= 70 && num < 80)
// {    
//     console.log("Grade: B");
// }
// else if(num >= 60 && num < 70)
// {    
//     console.log("Grade: C");
// }   
// else if(num >= 50 && num < 60)
// {    
//     console.log("Grade: D");
// }   
// else if(num >= 0 && num < 50)
// {    
//     console.log("Grade: F");
// }   
// else
// {    
//     console.log("Invalid input. Please enter a number between 0 and 100.");
// }


//loops
// for(let count=1; count<=5; count++)
// {
//     console.log("Zahid");
// }
// console.log("Loop finished.");

// let sum=0;
// for(let i=1; i<=10; i++)
// {
//     sum+=i;
// }
// console.log("Sum of numbers from 1 to 10: " + sum);

// let sum=0;
// let n=prompt("Enter a number:");
// for(let i=1; i<=n; i++)
// {
//     sum+=i;
// }   
// console.log("Sum of numbers from 1 to " + n + ": " + sum);

//for off loop
// for (let string of "tmkc")
// {
//     console.log(string);
// }

// let str="Hello, World!";
// let size=0;
// for(let i of str)
// {
//     console.log(i);
//     size++;
// }
// console.log("Size of the string: " + size);

//for in loop

// let student={
//     name:"Zahid",
//     age:25,
//     cgpa:3.75,
//     isPass:true
// };

// for(let i in student)
// {
//     console.log(i + ": " + student[i]);
// }

// for(let key in student)
// {    console.log("Key=",key,"value=",student[key]);
// }

//Print all  numbers 0 to 100
// for(let i=0; i<=100; i++)
// {
//     console.log(i);
// }

//even num
// for(let i=0; i<=100; i++)
// {    
//     if(i%2==0)
//     {
//         console.log("Num: " + i);
//     }
// }

//guessing game
let gamenum=25;
let usernum=prompt("Guess the number between 0 and 100:");
if(usernum==gamenum)
{
    console.log("Correct guessed.");
}
else if(usernum<gamenum)
{
    console.log("Too low, Try again.");
}  
else
{
    console.log("Too high, Try again.");
}