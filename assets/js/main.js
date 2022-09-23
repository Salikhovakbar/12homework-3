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
    const one = document.createElement("span");
    answer1.appendChild(one);
one.innerText = eval( + one + two + three + four + five + six + seven + eight + nine + ten + eleven + twelve + ther + fourteen + fivteen );
})
plus.addEventListener("click", () => {
    const two = document.createElement("span");
    answer1.appendChild(two);
    two.innerText = "+";
    answer2.innerText = "";
})
minus.addEventListener("click", () => {
    const three = document.createElement("span");
    answer1.appendChild(three);
    three.innerText = "-";
    answer2.innerText = "";
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
    const six = document.createElement("span");
    answer1.appendChild(six);
    six.innerText = 1;
    answer2.innerText = "";

})
number2.addEventListener("click", (e) => {
    const seven = document.createElement("span");
    answer1.appendChild(seven);
    seven.innerText = 2;
    answer2.innerText = "";

})
number3.addEventListener("click", (e) => {
    const eight = document.createElement("span");
    answer1.appendChild(eight);
    eight.innerText = 3;
    answer2.innerText = "";

})
number4.addEventListener("click", (e) => {
    const nine = document.createElement("span");
    answer1.appendChild(nine);
    nine.innerText = 4;
    answer2.innerText = "";

})
number5.addEventListener("click", (e) => {
    const ten = document.createElement("span");
    answer1.appendChild(ten);
    ten.innerText = 5;
    answer2.innerText = "";

})
number6.addEventListener("click", (e) => {
    const eleven = document.createElement("span");
    answer1.appendChild(eleven);
    eleven.innerText = 6;
    answer2.innerText = "";

})

number7.addEventListener("click", (e) => {
    const twelve = document.createElement("span");
    answer1.appendChild(twelve);
    twelve.innerText = 7;
    answer2.innerText = "";

})
number8.addEventListener("click", (e) => {
    const ther = document.createElement("span");
    answer1.appendChild(ther);
    ther.innerText = 8;
    answer2.innerText = "";

})
number9.addEventListener("click", (e) => {
    const fourteen = document.createElement("span");
    answer1.appendChild(fourteen);
    fourteen.innerText = 9;
    answer2.innerText = "";

})
number0.addEventListener("click", (e) => {
    const fivteen = document.createElement("span");
    answer1.appendChild(fivteen);
    fivteen.innerText = 0;
    answer2.innerText = "";

})