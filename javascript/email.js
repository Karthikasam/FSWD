let samba = document.getElementById("sam")
let mails = document.getElementById("mail")
let wordspass = document.getElementById("word")
let btn = document.getElementById("logbtn")
let seenele = document.getElementById("seen")
btn.addEventListener("click", function (e) {
    e.preventDefault()
    //if(mails.value.toUpperCase()===mails.value&& mails.value.trim().length!==0){
    //alert("letters must be in lowercase")
    //}
    // if(wordspass.value[0].toLowerCase()===wordspass.value[0])
    //alert("password first letter should be in caps")
    // let wrd = wordspass.value.substring(1)
    // if(wrd.toUpperCase()===wrd){
    //     alert("letters should be in lowercase")
    // }
    // if(wordspass.value.length<8){
    //     alert("password should contain minimum 8 chracters")
    // }
    let regularExpression =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    let regular  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let reg = regularExpression.test(mails.value)
    let regs = regular.test(wordspass.value)
    if (!reg) {
        let paras = document.getElementById("h1")
        paras.classList.remove("hide1")
    }
    if(!regs){
        let parase = document.getElementById("h2")
        parase.classList.remove("hide1")

    }

})
seenele.addEventListener("click", function () {
    if(wordspass.type=="password"){
        wordspass.setAttribute("type", "text")
    }
    else{
        wordspass.setAttribute("type", "password")
    }

})