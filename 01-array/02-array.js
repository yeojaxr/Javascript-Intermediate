const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arrayInputan) {
    let rata = 0

    for (let i=0; i<arrayInputan.length; i++){
        rata += arrayInputan[i]
    }

    rata = rata / arrayInputan.length

    let diAtasRata = 0

    for (let i=0; i<arrayInputan.length; i++){
        if (arrayInputan[i] > rata){
            diAtasRata += 1
        }
    }

    return diAtasRata

}

console.log(getAverage(arr1))
console.log(getAverage(arr2))