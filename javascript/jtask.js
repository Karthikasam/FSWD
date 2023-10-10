let key = document.getElementById("keyadd")
let ins = document.getElementById("put")
let sub = document.getElementById("add")
sub.addEventListener("click", function () {
    let newtag = document.createElement("p")
    if (ins.value != ""&&ins.value!=" ") {
        key.append(newtag)
        newtag.append(ins.value)
    }
    ins.value = ""
    let crossbtn = document.createElement("button")
    crossbtn.append("X")
    newtag.append(crossbtn)
     crossbtn.addEventListener("click", function () {
         newtag.remove()
    })
})
