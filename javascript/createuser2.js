let arr = [];
let count = 1;
function createuser(a, b, c, d) {
    let obj = {
        "id": count,
        "firstname": a,
        "lastname": b,
        "gender": c,
        "age": d,
    }
    arr.push(obj)
    count++
}
createuser("kane", "williamson", "male", 31)
createuser("thinesh", "raj", "male", 21)
createuser("karthika", "sambasivam", "female", 21)
createuser("aadvik", "chandra", "male", 3)
createuser("usha", "nandhini", "female", 28)
createuser("vignesh", "chandra", "male", 31)
createuser("janani", "bharathi", "female", 23)
createuser("maha", "lakshmi", "female", 21)
createuser("muthu", "vel", "male", 18)
createuser("saratha", "muthaiyan", "female", 80)
arr.slice(0, 5)
//console.log(arr)
