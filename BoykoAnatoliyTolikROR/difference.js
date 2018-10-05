const arr1 = [7,6,5,4,3];
const arr2 = [1, 2, 3, 4];

function difference(array1, array2) {
  return array1.filter(x => !array2.includes(x));
}
