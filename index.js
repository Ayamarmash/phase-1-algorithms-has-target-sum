function hasTargetSum(array, target) {
  if(array.length <= 0)return false
  for (let index = 0; index < array.length; index++) {
    let n = target - array[index]
    if(array.indexOf(n) >= 0 && array.indexOf(n) != index) return true
  }
  return false
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}