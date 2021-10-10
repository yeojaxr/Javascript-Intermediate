const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arrayInputan, nilai) {
      const arrayBaru = [].concat(...arrayInputan) //menggabungkan dua array
      
      for (let i=0; i<arrayBaru.length; i++) {
          if (arrayBaru[i] === nilai) {
              return i 
          }
      }
      return null
  }
  
  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  