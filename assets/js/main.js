const answer1 = document.getElementById("add-answer-one");
const answer2 = document.getElementById("add-answer-two");
const plus = document.getElementById("item1");
const minus = document.getElementById("item2");
const times = document.getElementById("item3");
const divided = document.getElementById("item4");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const square = document.getElementById("item5");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const cube = document.getElementById("item6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const number0 = document.getElementById("number0");
const equal = document.getElementById("item7");
const Delete = document.getElementById("item8");

answer2.innerText = 0;

Delete.addEventListener("click", (e) => {
    const one = document.createElement("span");
    answer1.appendChild(one);
answer1.innerText = "";
answer2.innerText = 0;

})
equal.addEventListener("click", (e) => {
document.getElementById("input").value = eval(input.value)

})
plus.addEventListener("click", () => {
    document.getElementById("input").value += '+';
})
minus.addEventListener("click", () => {
    document.getElementById("input").value += '-';

})
times.addEventListener("click", (e) => {
    const four = document.createElement("span");
    answer1.appendChild(four);
    four.innerText = "*";
    answer2.innerText = "";
})
divided.addEventListener("click", (e) => {
    const five = document.createElement("span");
    answer1.appendChild(five);
    five.innerText = "%";
    answer2.innerText = "";

})
number1.addEventListener("click", (e) => {
    document.getElementById("input").value += '1';


})
number2.addEventListener("click", (e) => {
    document.getElementById("input").value += '2';
})
number3.addEventListener("click", (e) => {
    document.getElementById("input").value += '3';


})
number4.addEventListener("click", (e) => {
    document.getElementById("input").value += '**';


})
number5.addEventListener("click", (e) => {
    document.getElementById("input").value += '4';


})
number6.addEventListener("click", (e) => {
    document.getElementById("input").value += '5';


})

number7.addEventListener("click", (e) => {
    document.getElementById("input").value += '6';


})
number8.addEventListener("click", (e) => {
    document.getElementById("input").value += '***';


})
number9.addEventListener("click", (e) => {
    document.getElementById("input").value += '7';


})
number0.addEventListener("click", (e) => {
    document.getElementById("input").value += '8';


})
