// Code was obtained from gdg. I struggle to understand this :(

const recurPermute = function (index, arr, ans) {
  if (index == arr.length) {
    ans.push(arr.slice());
    return;
  }

   for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    recurPermute(index + 1, arr, ans);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

const permutations = function(array) {
  let ans = [];
  recurPermute(0, array, ans);
  return ans;
};

console.log(permutations([1, 2]));
  
// Do not edit below this line
module.exports = permutations;
