let info = {}
function details(property, value) {
    info[property] = value
}
function updatedetails(property, value) {
    info[property] = value
}
//function deletedetails(propertyname){
//delete info[propertyname]
//}
details("fname", "karthika")
details("lname", "sambasivam")
updatedetails("fname", "ushanandhini")
//deletedetails("fname")
console.log(info)