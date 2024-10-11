let x = 10;
function testScope() {
    let x = 20;
    console.log("Inside function:", x);
}
testScope();
console.log("Outside function:", x);

/* Tashqi doira: let x = 10; qatorida x o'zgaruvchisi 10 ga teng bo'lib e'lon qilingan. Bu tashqi doira (global scope) deb ataladi.
Ichki doira: testScope funksiyasida let x = 20; deb e'lon qilingan x o'zgaruvchisi faqat funksiya ichida mavjud. Bu o'zgaruvchi faqat funktsiya bajarilayotgan paytda mavjud va u tashqi doira bilan bog'lanmaydi. */

{
    let blockLet = "I am block scoped";
    var blockVar = "I am function/global scoped";
}
console.log(blockLet);
console.log(blockVar);

/* Block scope (blok doira): let blockLet = "I am block scoped"; qatori blockLet o'zgaruvchisini yaratadi va u faqat blok ichida mavjud. Blok ( { ... } )dan chiqqandan so'ng, bu o'zgaruvchiga murojaat qilish mumkin emas.
Function/global scope: var blockVar = "I am function/global scoped"; qatori blockVar o'zgaruvchisini yaratadi. var bilan e'lon qilingan o'zgaruvchilar funksional yoki global doirada mavjud bo'ladi, shuning uchun bu o'zgaruvchi blokdan tashqarida ham mavjud. */

function outer() {
    let outerVar = "I'm from the outer function";
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();

console.log(tempVar);
let tempVar = "I'm in TDZ";



function scopeTest() {
    if (true) {
        var funcVar = "I'm function scoped";
        let blockLet = "I'm block scoped";
    }
    console.log(funcVar);
    console.log(blockLet);
}
scopeTest();

/* var bilan e'lon qilingan o'zgaruvchi funcVar funksiya doirasida mavjud. Shuning uchun, if bloki ichida e'lon qilingan bo'lsa ham, bu o'zgaruvchi funksiya tugaganidan keyin ham mavjud bo'ladi.
console.log(funcVar); qatori "I'm function scoped" ni chop etadi. */

/* let bilan e'lon qilingan o'zgaruvchi blockLet faqat if blokida mavjud. Bu blokdan tashqarida bu o'zgaruvchiga murojaat qilish mumkin emas.
console.log(blockLet); qatori "ReferenceError" xatosini beradi, chunki blockLet o'zgaruvchisi blok doirasidan tashqarida mavjud emas. */

let name = "Global";
function shadowingExample() {
    let name = "Local";
    console.log(name);
}
shadowingExample();

/* let name = "Global"; qatori global doirada name o'zgaruvchisini e'lon qiladi va uning qiymati "Global" ga teng.
shadowingExample funksiyasida let name = "Local"; qatori name o'zgaruvchisini lokal doirada e'lon qiladi. Bu lokal name global name o'zgaruvchisini "shadow" (yashirish) qiladi. Ya'ni, lokal name global name ga o'xshash bo'lsa-da, ular bir-biridan mustaqildir */

function outerFunc() {
    let outerVar = "I'm a closure variable";
    return function innerFunc() {
        console.log(outerVar);
    };
}
const closureFunc = outerFunc();
closureFunc();



console.log(i);
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* Ushbu qator "ReferenceError" xatosini beradi, chunki i o'zgaruvchisi hali e'lon qilinmagan. let bilan e'lon qilingan o'zgaruvchilar faqat o'z doiralari ichida mavjud. Bu yerda i faqat for sikli ichida mavjud bo'ladi.
for (let i = 0; i < 5; i++) qatori i o'zgaruvchisini e'lon qiladi va qiymatini 0 ga o'rnatadi. Bu i o'zgaruvchisi sikl ichida mavjud bo'ladi va har bir iteratsiyada konsolga chop etiladi.
console.log(i); ichida sikl davomida i qiymati 0 dan 4 gacha bo'lgan qiymatlarni chiqaradi (ya'ni, "0", "1", "2", "3", "4"). */

function testVarScope() {
    var localVar = "I’m function scoped";
}
testVarScope();
console.log(localVar);

/* testVarScope funksiyasida var localVar = "I’m function scoped"; qatori localVar o'zgaruvchisini e'lon qiladi. Bu o'zgaruvchi faqat funksiya ichida mavjud bo'ladi (funksiya doirasida).
testVarScope(); qatori funksiyani chaqiradi, lekin localVar ni tashqarida ko'rish mumkin emas.
Bu qator ishlaganda "ReferenceError" xatosini beradi, chunki localVar tashqi doirada mavjud emas. var bilan e'lon qilingan o'zgaruvchilar faqat funksiya doirasida mavjud bo'ladi va tashqarida foydalanish mumkin emas. */

function parent() {
    let parentVar = "I'm in the lexical scope";
    const child = () => console.log(parentVar);
    child();
}
parent();

/* parent() funksiyasi chaqirilganda, parentVar o'zgaruvchisi "I'm in the lexical scope" qiymatini oladi.
child o'zgaruvchisi arrow (o'q) funktsiyasi sifatida e'lon qilinadi va bu funksiyada parentVar ni konsolga chiqarish vazifasi bajariladi.
Arrow funktsiyalar, o'z doirasidan tashqaridagi o'zgaruvchilarga murojaat qilish imkoniyatiga ega.
child() chaqirilganda, u parentVar ni konsolga chiqaradi.
Bu yerda parentVar ni chiqarishda hech qanday xato bo'lmaydi, chunki child funksiyasi parent funksiyasi doirasida e'lon qilingan. */

if (true) {
    let message = "Inside block";
}
console.log(message);

/* let message = "Inside block"; qatori if blokida message o'zgaruvchisini e'lon qiladi. Bu o'zgaruvchi faqat ushbu blok ichida mavjud va tashqarida ko'rinmaydi.
console.log(message); chaqirilganda, message o'zgaruvchisi blok doirasidan tashqarida mavjud emas, shuning uchun "ReferenceError" xatosini beradi. */

var greeting = "Hello";
function changeGreeting() {
    var greeting = "Hi";
    console.log(greeting);
}
changeGreeting();
console.log(greeting);



function example(param = defaultVal) {
    let defaultVal = 10;
    return param;
}
example();

/* param = defaultVal da defaultVal o'zgaruvchisi funksiya ichida mavjud emas, shuning uchun bu joyda xato yuzaga keladi.
Funksiyaning ichida let defaultVal = 10; qatori bor, lekin bu o'zgaruvchi faqat funksiya ichida e'lon qilingan va bu joyda defaultVal ishlatishdan oldin e'lon qilinmagan.
let bilan e'lon qilingan o'zgaruvchilar "Temporal Dead Zone" (TDZ) holatiga ega, ya'ni ularni e'lon qilinmaguncha foydalanishga ruxsat berilmaydi.
Shu sababli, param = defaultVal da defaultVal foydalanilganda xato beradi, chunki bu joyda defaultVal hali e'lon qilinmagan. */

let globalVar = "Global";
function outerFunc() {
    let localVar = "Local";
    return function innerFunc() {
        console.log(globalVar, localVar);
    };
}
outerFunc()();



console.log(double(5));
let double = function (x) {
    return x * 2;
};

/* Ushbu qator bajarilganda, double o'zgaruvchisi hali e'lon qilinmagan. let bilan e'lon qilingan o'zgaruvchilar "Temporal Dead Zone" (TDZ) holatiga ega, ya'ni ularni e'lon qilinmaguncha foydalanishga ruxsat berilmaydi.
Shu sababli, console.log(double(5)); bajarilganda "ReferenceError: Cannot access 'double' before initialization" xatosi yuzaga keladi.
let double = function (x) {...}; qatori double o'zgaruvchisini funktsiya sifatida e'lon qiladi, lekin bu qatorning bajarilishi avvalgi console.log qatoridan keyin bo'lmaydi. */

function hoistExample() {
    console.log(num);
    var num = 10;
}
hoistExample();



for (const i = 0; i < 3; i++) {
    console.log(i);
}

/* const bilan e'lon qilingan o'zgaruvchilar bir marta tayinlanishi mumkin va keyinchalik o'zgarishi mumkin emas. const i = 0; qatori i ni 0 qiymatiga tayinlaydi.
for sikli har bir iteratsiyada i o'zgaruvchisini yangilanishini talab qiladi (ya'ni i++ bajarilishi kerak). Ammo const o'zgaruvchisi bir marta tayinlanib, keyinchalik o'zgarishiga ruxsat bermaydi. */

const obj = {
    name: "JavaScript",
    printName: () => console.log(this.name)
};
obj.printName();



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

/* outer() chaqirilganda, outerVar o'zgaruvchisi "Outer" qiymatini oladi.
outer funksiyasidan keyin middle() chaqiriladi, bu esa middleVar o'zgaruvchisiga "Middle" qiymatini beradi.
middle funksiyasi ichida inner() chaqiriladi. Bu funksiyada console.log(outerVar, middleVar); qatori mavjud.
Bu yerda inner funksiyasi outerVar va middleVar o'zgaruvchilarini chiqarishi mumkin, chunki ular lexical scope orqali mavjud.
inner funksiyasi chaqirilganda, konsolda "Outer Middle" chop etiladi.
 */

console.log(funcDeclaration());
console.log(funcExpression());

function funcDeclaration() {
    return "Function declaration";
}

const funcExpression = function () {
    return "Function expression";
};

/* funcDeclaration funksiyasi funktsiya e'lon qilinishidan oldin chaqirilsa ham, bu muammo emas, chunki JavaScript-da funksiyalar e'lon qilingan joydan yuqoriga ko'tariladi (hoisting).
Natijada, funcDeclaration() chaqirilganda, konsolda "Function declaration" chop etiladi.
funcExpression const bilan e'lon qilingan, lekin console.log(funcExpression()); qatori bajarilganda, bu o'zgaruvchi hali e'lon qilinmagan. let yoki const bilan e'lon qilingan o'zgaruvchilar "Temporal Dead Zone" (TDZ) holatiga ega.
Shu sababli, funcExpression() chaqirilganda "ReferenceError: Cannot access 'funcExpression' before initialization" xatosi yuzaga keladi. */