// Task 1
let num1 = 5;
let num2 = 10;
console.groupCollapsed('Task1')
if (num1 < num2) {
    console.log(`${num2} is greater than ${num1}`)
} else if (num1 === num2) {
    console.log(`${num2} and ${num1} are equal`)
} else {
    console.log(`${num1} is greater than ${num2}`)
}
console.groupEnd()


// Task 2

// 2. Patikrinti 5 skaičius (kintamuosius) ir nurodyti kuris is jų yra didžiausias ir atsakymą išvesti tokiu formatu:
// „Tarp skaičių 5, 10, 4, -6 ir 13 didžiausias yra skaičius 13"

let num21 = 5;
let num22 = 10;
let num23 = 4;
let num24 = -6;
let num25 = 13;

if (num21 >= num22 && num21 >= num23 && num21 >= num24 && num21 >= num25) {
    console.log(`Number ${num21} is biggest`)
} else if (num22 >= num21 && num22 >= num23 && num22 >= num24 && num21 >= num25) {
    console.log(`Number ${num22} is biggest`)

} else if (num23 >= num21 && num23 >= num22 && num23 >= num24 && num23 >= num25) {
    console.log(`Number ${num23} is biggest`)

} else if (num24 >= num21 && num24 >= num22 && num24 >= num23 && num24 >= num25) {
    console.log(`Number ${num24} is biggest`)

} else if (num25 >= num21 && num25 >= num22 && num25 >= num23 && num24 >= num24) {
    console.log(`Number ${num25} is biggest`)

}