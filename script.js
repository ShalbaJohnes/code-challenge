function gradeCalculator(){
    let marks = prompt("Enter student marks(0-100):"); //Prompts the user for input
}
marks = parseFloat(marks); //Convert the input to a number
if(isNaN(marks)|| marks< 0 || marks > 100){
    alert("Invalid input.Please enter a number between 0 and 100.");
    return; // Exits the function if the input is void
}
  
let grade;
if (marks > 79){
    grade = "A";
}
else if (marks >= 60){
    grade = "B";
}
else if (marks >= 49){
    grade = "C";
}
else if (marks >= 40){
    grade = "D";
}
else {
    grade = "E";
}
