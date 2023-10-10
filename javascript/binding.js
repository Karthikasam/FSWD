//call()
let obj = {
    fname: "sam",
    lname: "curran"
}
function details(age) {
    console.log(this.fname + "  " + this.lname + "  " + age)
}
//details.call(obj,30)

//apply()
details.apply(obj, [30])

//bind()
let obj1 = {
    fname: "karthika",
    name: function () {
        console.log(this.fname)
    }
}
obj1.name()
let obj2 = {
    fname: "ram"
}
let result = obj1.name.bind(obj2)
result()