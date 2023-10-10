let start = document.getElementById("multi")
let middle = document.getElementById("multiput")
let end = document.getElementById("multibtn")
end.addEventListener("click", function () {
    if (middle.value != "") {
        for (i = 1; i <= 10; i++) {
            let tagger = document.createElement("p")
            start.append(tagger)
            tagger.append(i + " x " + middle.value + " = " + middle.value * i)
        }
    }
    middle.value=""
})