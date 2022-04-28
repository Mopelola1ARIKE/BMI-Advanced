var weight = prompt("What is your Weight");

var height = prompt("What is your Height");

var BMI = weight / (height * height);

var BMIout = Math.round(BMI);

if (BMIout < 18.5) {
    alert ("Your BMI is " + BMIout + " so you are underweight")
}
else {
    alert ("Your BMI is " + BMIout + " so you are normal weight")
}

if (BMIout => 18.5 || 24.9 ) {
    alert ("Your BMI is " + BMIout + " so you have a normal weight")
}
else {
    alert ("Your BMI is " + BMIout + " so you are weightless")
}

if (BMIout > 24.9) {
    alert ("Your BMI is " + BMIout + " so you are overweight")
}
else {
    alert ("Your BMI is " + BMIout + " so you are normal weight")
}

function allow() {
    var age = 12;
    var accompanied = true;
    if (age && accompanied) {
        alert ("Allow them in")
    }
    else {
        alert ("Do not allow in")
    }
}

allow();