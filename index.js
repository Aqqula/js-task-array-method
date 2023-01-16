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