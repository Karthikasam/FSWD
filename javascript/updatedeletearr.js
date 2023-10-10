let colours = [];
function coloursname(a) {
    colours[colours.length] = a
}
function updatecolours(index, value) {
    colours[index] = value
}
function deletecolours(index) {
    delete colours[index]
}
coloursname("voilet")
coloursname("pink")
updatecolours(0, "blue")
//deletecolours(0)
for (i = 0; i < colours.length; i++) {
    console.log(`** ${colours[i]} **`)
}
