// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);}
// ? #1.1 - run in the console:
// * answer: it will alert inside the funcOne function 3

// funcOne()
// ? #1.2 What will happen if the variable is declared 
// ? with const instead of let ?
// * answer: it will throw an error because we can't reassign a value to a const variable
//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// ? #2.1 - run in the console:
// * answer: it will alert inside the fisrt the funcThree function 0 then inside secand the funcThree function 5 then inside the funcThree function 5
// funcThree()
// funcTwo()
// funcThree()
// ? #2.2 What will happen if the variable is declared 
// ? with const instead of let ?
// * answer: it will throw an error because we can't reassign a value to a const variable

//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// ? #3.1 - run in the console:
// * answer: it will alert inside the funcFive function hello becose we set a as a global variable
// funcFour()
// funcFive()

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// ? #4.1 - run in the console:\
// * answer: it will alert inside the funcSix function test becose the local variable has a higher priority than the global variable

// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// * answer: it will work becose if the const is global we not reassign it and if it's local we not reassign it too local variable can have the same name as a global variable

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// ? #5.1 - run the code in the console
// * answer: it will alert in the if block 5 then outside of the if block 2
// ? #5.2 What will happen if the variable is declared with const instead of let ?
// * answer: it will work becose if the const is global we not reassign it and if it's local we not reassign it too local variable can have the same name as a global variable
