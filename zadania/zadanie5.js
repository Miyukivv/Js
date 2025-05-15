function findPairsWithSum(numbers,targetSum){
  const pairs = [];
  for (let i=0; i<numbers.length; i++){
    for (let j=i+1; j<numbers.length; j++){
      if (numbers[i]+numbers[j] === targetSum){
        pairs.push([numbers[i],numbers[j]]);
      }
    }
  }
  return pairs;
}

const nums1 = [1, 2, 3, 4, 5, 2];
console.log(findPairsWithSum(nums1, 5));
// [[1,4], [2,3], [3,2]]

const nums2 = [0, -1, 1, 2, -2, 3];
console.log(findPairsWithSum(nums2, 1));
//[[0,1], [-1,2], [3,-2]]