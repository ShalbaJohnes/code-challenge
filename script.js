let mark = (prompt("Enter marks here"));  //this prompts user to fill their marks 
   let grade        //declares a variable to hold the grade

    if (mark < 0 || mark > 100 || isNaN(mark)) {     //checks whether input is out of range or an invalid no.
      grade = "Invalid input! Enter a number between 0 and 100.";   //sets grade var to an error message
}
else if (mark >=79){
    grade = "A";
}
x}
else {
    grade = "E";
}
alert(grade);       //this displays the grade in an alert box
    