let array = [2, 1, 3]
let arr = []

arr = [array[array.length - 1], array[array.length - 2], array[array.length - 3]]
console.log(arr)


let str = "abcdbccs07s"
let arrs = []
for (let i = 0; i < str.length; i++) {
    let remaining = str.substr(i + 1)
    let nextoccurance = remaining.indexOf(str.charAt(i))
    if (nextoccurance !== -1 && i + nextoccurance + 1 !== i + 1) {
        arrs.push(str.substr(i + 1, nextoccurance))
    }
}
console.log(arrs)