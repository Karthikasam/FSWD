function bmicalculator(w, h) {
    BMI = w / (h * h)
    console.log(BMI)
    if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("normal")
    }
    else if (BMI >= 25.0 && BMI <= 29.9) {
        console.log("overweight")
    }
    else if (BMI >= 30) {
        console.lo("obese")
    }
    else {
        console.log("underweight")
    }
}
bmicalculator(44, 1.50)
bmicalculator(45, 1.60)