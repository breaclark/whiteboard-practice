
// let start = performance.now();
// let sum = 0;
// for (let i=0; i< 1000000; i++){
//   sum += i;
// }
// let end = performance.now();
// let duration = end - start;
// console.log(duration);

let alphaChecker = function(alphaString){
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let alphaSplit = alpha.split("");
  let alphaArray = alphaString.split("");
  alphaArray.sort();
  let sumArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (var i = 0; i < alphaSplit.length; i++) {
    for (var j = 0; j < alphaArray.length; j++) {
      if (alphaSplit[i] === alphaArray[j]) {
        sumArray[i] = sumArray[i] + 1;
      }
    }
  }
  console.log(sumArray);
}

let alphaChecker2 = function (alphaString) {
  let sumMap = new Map();
  for (let i = 0; i < alphaString.length; i++) {
    if(sumMap.has(alphaString[i])){
      let currentSum = sumMap.get(alphaString[i]);
      sumMap.set(alphaString[i], currentSum + 1);
    }
    else {
      sumMap.set(alphaString[i], 1);
    }
  }
  let sumArray = Array.from(sumMap);
  sumArray.sort()
  console.log(sumArray);
}

let alphaString = `helloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpihelloiamastringoflettersoijklsrefdfvpjpklakdidknvjfiekexmxlslsieikejfjallaskskeiejflaalwkwkeraefwefoifsjaldkfldfjwoeifjweifjskjzlzkzsjdqnqwewkjfldsiojapwijrkeafdpi`;

let start = performance.now();
alphaChecker(alphaString);
let end = performance.now();
let duration = end - start;
console.log(duration);

let start2 = performance.now();
alphaChecker2(alphaString);
let end2 = performance.now();
let duration2 = end2 - start2;
console.log(duration2);
