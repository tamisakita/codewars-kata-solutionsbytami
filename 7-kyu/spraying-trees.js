// There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

// Weekday

// Number of trees that must be sprayed on that day

// Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

// Let cost of all liquid be x

// Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

function task(w, n, c) {
  let costOfliquid = n * c;
  let name = '';

  switch (w) {
    case 'Monday':
      name = 'James';
      break;
    case 'Tuesday':
      name = 'John';
      break;
    case 'Wednesday':
      name = 'Robert';
      break;
    case 'Thursday':
      name = 'Michael';
      break;
    case 'Friday':
      name = 'William';
      break;
  }

  return `It is ${w} today, ${name}, you have to work, you must spray ${n} trees and you need ${costOfliquid} dollars to buy liquid`;
}

task('Monday', 15, 2)