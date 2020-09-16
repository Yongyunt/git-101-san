const calGrade = (point) => {
    let grde = null
    if(point >= 81 && point <=100) {
        grade = "A"
    }   else if (point >= 71 && point <=80) {
        grade = "B"
    }   else if (point >= 61 && point <=70) {
        grade = "c"
    }   else if (point >= 51 && point <=60) {
        grade = "c"
    }   else if (point >= 0 && point <=50) {
        grade = "f"
    } else {
        grade = "No greade"
    }
    return grade

}
console.log(calGrade(80))