let samba = document.getElementById("sam")
let mails = document.getElementById("mail")
let wordspass = document.getElementById("word")
let btn = document.getElementById("logbtn")
let seenele = document.getElementById("seen")
btn.addEventListener("click",function(){
    if(mails.value.toUpperCase()===mails.value&& mails.value.trim().length!==0){
     alert("letters must be in lowercase")
    }
    if(wordspass.value[0].toLowerCase()===wordspass.value[0])
    alert("password first letter should be in caps")
    let wrd = wordspass.value.substring(1)
    if(wrd.toUpperCase()===wrd){
        alert("letters should be in lowercase")
    }
    if(wordspass.value.length<8){
        alert("password should contain minimum 8 chracters")
    }
})
seenele.addEventListener("click",function(){
    wordspass.setAttribute("type","text")
})