const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arrReal) {
    let arr = [...arrReal]
    if (arr.length === 1) {
        return arr[0]
    } else {
        const angka = arr.pop()
        arr[0] += angka
        return sumOfArray(arr)
    }
}

// console.log(sumOfArray(arr1));
// console.log(sumOfArray(arr2));


const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(arr, avg) {
    if (arr.length > 0){
        if (arr[0] > avg){
            return 1 + countAboveAvg(arr.slice(1), avg)
        }else{
            return countAboveAvg(arr.slice(1), avg)
        }
    } else{
        return 0
    }
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);
