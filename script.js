let uname = prompt("please enter your username:");
let pass = prompt("please enter your password:");
if (uname === "admin" && pass === "123") {
    alert("welcom");
} else {
    alert("wrong username or password");
}


let agerange = prompt("please enter your age");
if (agerange >= 10 && agerange <= 20) {
    alert("you are teenager");
}
else if (agerange >= 20 && agerange <= 40) {
    alert("you are young");
}
else {
    alert("you are adult");
}