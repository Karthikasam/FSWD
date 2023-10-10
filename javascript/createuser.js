let users = [];
let count = 1
function createuser(a, b, c, d) {
    let obj = {
        "id": count,
        "fname": a,
        "lname": b,
        "gender": c,
        "age": d
    }
    users.push(obj)
    count++

}
createuser("sam", "curran", "male", 21)
createuser("ram", "kumar", "male", 25)
console.log(users)
