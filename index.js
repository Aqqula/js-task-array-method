//Mariaa Batanova
//Написати функцію, яка приймає масив чисел
//і повертає true, якщо в цьому масиві є два однакових числа поспіль
//Якщо не має - повертає false, якщо масив порожній - теж повертає false

const arr1 = [1,2,3,4]; //false
const arr2 = [1,2,2]; //true
/**
 * 
 * @param {[number]} arr 
 * @returns {boolean}
 */
function getTwoSameNumbers(arr){
  if(arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]){
        return true;
    }
  }
  return false;
}

console.log(getTwoSameNumbers(arr1));
console.log(getTwoSameNumbers(arr2));

/**
 * 
 * @param {number} arr 
 * @returns {boolean}
 */
function getTwoNumIndexOf(arr) {
  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i + 1) === i + 1) {
      return true;
    }
  }
  return false;
}
console.log(getTwoNumIndexOf(arr1));
console.log(getTwoNumIndexOf(arr2));