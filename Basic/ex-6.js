//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function leapyear(year) {
  //se for divisivel por 100, tem que ser divisivel por 400 tb
  //se n for divisivel por 100, tem que ser divisivel por 4
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));
