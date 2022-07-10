/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/
let num = 0
function isNegative(num) {
  if (num > 1 || num < -1)
  return true;

}
console.log(num);

let between = 5;
function isBetween5and10(between) {
  if (between >= 5 && between < 11)
  return true;
}
console.log(isBetween5and10);

let nameShort = 'short';
function isShortName(nameShort) {
  if (nameShort === 'Daniel')
  return true;
}

console.log(isShortName);

let withD = 'Daniel';
function startsWithD(withD) {
  if (withD == 'D')
  return true;
}

console.log(startsWithD);


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
