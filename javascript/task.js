let arr = []
let repeat = (a, b) => {
    for (let i in arr) {
        if (arr[i].Name == a || arr[i].Mail == b) {
            return true
        }
    }
    return false
}
function createuser(a, b, c, d, e) {
    let obj = {}
    //let edit = (ele)=>ele.Name===a||ele.Mail===d
    //if(arr.find(edit)?.Name===a||arr.find(edit)?.Mail===d){
    if (repeat(a, b)) {
        console.log("user already exists")
    }
    else {
        obj.id = arr.length + 1
        obj.Name = a
        obj.age = b
        obj.gender = c
        obj.Mail = d
        obj.role = e
        arr.push(obj)
    }
}

//  function updateuser(h,k,l){
//  let elements = arr.findIndex(function updates (ele){
//         return ele.id==h
//      })
//      arr[elements][k] = l
// }
function updateuser(h, value) {
    let update = arr.findIndex(function updates(ele) {
        return ele.id == h
    })
    arr[update][Object.keys(value)[0]] = Object.values(value)[0]
}

createuser("sam", "90", "male", "sam@gmail.com", "webdeveloper")
createuser("sam", "85", "female", "sam20@gmail.com", "developer")
createuser("thinesh", "21", "male", "thinesh90@gmail.com", "waste")
updateuser(1, { Name: "ram" })
updateuser(1, { role: "analyst" })
console.log(arr)
let result = []
let display = (names) => {
    return result = arr.map((ele) => ele[names])
}
display("Name")
console.log(result)
let wild = []
let wildsearch = (x) => {
    return wild = arr.filter((ele) => ele.Name.indexOf(x) !== -1 ||
        ele.Mail.indexOf(x) !== -1 ||
        ele.role.indexOf(x) !== -1 ||
        ele.gender.indexOf(x) !== -1 ||
        ele.age.indexOf(x) !== -1)
}
wildsearch("sam")
wildsearch("developer")
wildsearch("90")
console.log(wild)