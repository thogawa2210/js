function tinh(){
    let h = document.getElementById("h").value;
    let w = document.getElementById("w").value;
    let bmi = w / (h*h)
    if (bmi < 18)
        document.write("Underweight");
    else if (bmi < 25.0)
        document.write("Normal");
    else if (bmi < 30.0)
        document.write("Overweight");
    else
        document.write("Obese")
}