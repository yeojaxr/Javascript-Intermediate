function trianglePattern(a, b) {
    if (a === 0) {
        return;
    }
    let space = "";
    for (let i = 0; i < b; i++) {
        if (i < a - 1) {
            space += " " 
        }else{
         space = space + String.fromCharCode(64 + (b - a + (i - a) + 2)) 
        }
    }
    console.log(space);
    trianglePattern(a - 1, b)
}

trianglePattern(5, 5);