let x = 10;
function testScope() {
    let x = 20;
    console.log("Inside function:", x);
}
testScope();
console.log("Outside function:", x);
/*********************************/


{
    let blockLet = "I am block scoped";
    var blockVar = "I am function/global scoped";
}
console.log(blockLet);
console.log(blockVar);
/*********************************/

function outer() {
    let outerVar = "I'm from the outer function";
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();

/*********************************/
console.log(tempVar);
let tempVar = "I'm in TDZ";

/*********************************/
function scopeTest() {
    if (true) {
        var funcVar = "I'm function scoped";
        let blockLet = "I'm block scoped";
    }
    console.log(funcVar);
    console.log(blockLet);
}
scopeTest();
/*********************************/


let name = "Global";
function shadowingExample() {
    let name = "Local";
    console.log(name);
}
shadowingExample();

/*********************************/

function outerFunc() {
    let outerVar = "I'm a closure variable";
    return function innerFunc() {
        console.log(outerVar);
    };
}
const closureFunc = outerFunc();
closureFunc();
/*********************************/

console.log(i);
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*********************************/

function testVarScope() {
    var localVar = "I’m function scoped";
}
testVarScope();
console.log(localVar);

/*********************************/
function parent() {
    let parentVar = "I'm in the lexical scope";
    const child = () => console.log(parentVar);
    child();
}
parent();

/*********************************/
if (true) {
    let message = "Inside block";
}
console.log(message);
/*********************************/

var greeting = "Hello";
function changeGreeting() {
    var greeting = "Hi";
    console.log(greeting);
}
changeGreeting();
console.log(greeting);



/*********************************/

function example(param = defaultVal) {
    let defaultVal = 10;
    return param;
}
example();




/*********************************/


let globalVar = "Global";
function outerFunc() {
    let localVar = "Local";
    return function innerFunc() {
        console.log(globalVar, localVar);
    };
}
outerFunc()();



/*********************************/
console.log(double(5));
let double = function (x) {
    return x * 2;
};




/*********************************/
function hoistExample() {
    console.log(num);
    var num = 10;
}
hoistExample();




/*********************************/
for (const i = 0; i < 3; i++) {
    console.log(i);
}




/*********************************/
const obj = {
    name: "JavaScript",
    printName: () => console.log(this.name)
};
obj.printName();




/*********************************/
function outer() {
    let outerVar = "Outer";
    function middle() {
        let middleVar = "Middle";
        function inner() {
            console.log(outerVar, middleVar);
        }
        inner();
    }
    middle();
}
outer();



/*********************************/


console.log(funcDeclaration());
console.log(funcExpression());

function funcDeclaration() {
    return "Function declaration";
}

const funcExpression = function () {
    return "Function expression";
};
