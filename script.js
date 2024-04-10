let btn = document.querySelector("#btn");
let stage = document.querySelector(".pos");
let ans = document.querySelector(".answer");

btn.addEventListener("click", () => {
    // Get the user input values
    var userHeight = parseFloat(document.querySelector("#height").value);
    var userWeight = parseFloat(document.querySelector("#weight").value);

    // Check if input values are valid numbers
    if (isNaN(userHeight) || isNaN(userWeight) || userHeight <= 0 || userWeight <= 0) {
        console.log("Please enter valid height and weight.");
        return; // Exit the function if input is invalid
    }
   
    // Calculate BMI
    var bmi = userWeight / (userHeight * userHeight);

    // Output the result
    let pos = "";
    if (bmi > 0 && bmi < 18.5) {
        pos = "underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        pos = "Normal Weight";
    } else if (bmi > 24.9 && bmi <= 29.9) {
        pos = "Overweight";
    } else if (bmi < 0) {
        pos = "You entered wrong input";
        ans.innerText = ans.innerText + pos;
        return;
    } else {
        pos = "Obesity";
    }
    stage.innerText = "Your BMI Category is: " + pos;
    ans.innerText = "Your BMI is: " + bmi.toFixed(2);

    // Reset input fields
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
});

