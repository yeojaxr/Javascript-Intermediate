function getObjectValue(object, path ) {
   let newPath = path.split(".")

   if (newPath.length === 1){
     if (object[newPath[0]] !== undefined){
      return object[newPath[0]]
     }else{
       return null
     }
    } else if (newPath.length === 0) {
       return null
    } else {
        if (object[newPath[0]]){
          return getObjectValue(object[newPath[0]], newPath.slice(1).join("."))
        } else{
          return null
        }
   }
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)
