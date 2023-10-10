function primenumbers(a) {
    let count = 0
    let i, j
    for (let j = 2; j <= a; j++) {
        for (let i = 1; i <= j; i++) {
            if (j % i == 0) {
                count++
            }
        }
        if (count == 2) {
            console.log(j)
        }
        count = 0
    }
}
primenumbers(200)
