// Challenge #1 //
// If statements //
let user = `Tom`;
if (user === `Tom`) {
  alert("Hello, Tom.");
} else {
  alert("Someone who is not Tom.")
}

// If statements cont. //
let age = 18
if (age === 18) {
  alert("Welcome to the casino");
}

// If statements cont. //
let age = prompt("Please enter your age?");
if (age > 18) {
  alert("Welcome to the casino");
} else {
  alert("Sorry, you are too young to enter.");
}

// Iterate through hash and add user input to array //
// let students = []
// students.push(`Sarah`)
// let username = prompt("Please enter your name:");
// students.push(username)

let students = []
for ( let person = 0; person < 3; person++) {
  let username = prompt("Please enter your name:");
  students.push(username);
  alert(username);
}

console.log(students)
//