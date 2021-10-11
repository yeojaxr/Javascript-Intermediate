const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, value) {
    if(arr.length === 0){
        return "angka tidak ditemukan"
    }else if(arr[arr.length -1] === value){
        return "angka ditemukan pada index: " + (arr.length -1)
    }
    return searchInArray(arr.slice(0, -1), value)
}


console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));
