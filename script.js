// !==================================== JS DSA (Data Structures and Algorithms) ===================================

// ? Note => (There are two methods to solve DSA problems brute force code and Optimized code)

// todo=> Day 1st   (06/03/2025)

// ? Sum of two integers:-

// let a = 10;
// let b = 20;
// console.log(a + b);

// ? Relation between integer & string:-

// #    --[ Note & remember that always ]--
/*
# A --> string + string = string (concatination)
# B --> string + integer = string (concatination)
# C --> integer + string = integer (concatination)
# D --> integer + integer = integer (arithmatical operation)
*/

// ? A (Example):-

// let a = "Hello";
// let b = " World";
// console.log(a + b);                  // Hello World
// console.log(typeof(a + b));          // string

// ? B (Example):-

// let a = "hello";
// let b = 20;
// console.log(a + b);                  // hello20
// console.log(typeof(a + b));          // string

// ? C (Example):-

// let a = 20;
// let b = "hello";
// console.log(a + b);                  // 20hello
// console.log(typeof(a + b));          // string

// ? D (Example):-

// let a = 20;
// let b = 30;
// console.log(a + b);                  // 50
// console.log(typeof(a + b));          // number

// ? sum and message (-type coersion):-

// let a = 20;
// let b = 30;
// console.log("The sum of " + a + "and " + b + " is " + a + b);       // wrong approach
// console.log(a + b + " sum of " + a + "and " + b + " is ");          // wrong approach
// console.log("The sum of " + a + "and " + b + " is " + (a + b));     // correct approach

// # Steps of solutions:-
// ==> "The sum of 20" + "and " + 30 + " is " + 20 + 30;
// ==> "The sum of 20 and " + 30 + " is " + 20 + 30;
// ==> "The sum of 20 and 30 " + " is " + 20 + 30;
// ==> "The sum of 20 and 30 is " + 20 + 30;
// ==> "The sum of 20 and 30 is 20 " + 30;
// ==> "The sum of 20 and 30 is 20 + 30";
// ==> "The sum of 20 and 30 is 2030";

// # Some other -type coersion examples:-

// console.log(1 - "1");          // 0
// console.log("5" - "1");        // 4
// console.log("5" * "3");        // 15
// console.log("5" / "2");        // 2.5

// # Note => Always calculation's direction from the left side to right side.

// ? Accept and print the value:-

// let age = Number(prompt("User Enter your age..."));
// console.log(age);

// ? Swap two variables via three methods:-

// # Method 1 (with extra variable):-

// let a = 20;
// let b = 10;
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(a, b);

// # Method 2 (mathematical calculation):-

// let a = 10;
// let b = 20;

// a = 10 + 20;
// b = a - b;
// a = a - b;

// console.log(a,b)

// # Method 3 (destructuring assignment operator):-

// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a, b);

// ? Operators and their question:-

// ########################################[ Arithmatic Operator ]#######################################################

// let a = 20;
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// # Other important example [For interview purpose]:-

// Mode:-

// console.log(4 % 10);              // 4
// console.log(5 % 80);              // 5

// Divide:-

// console.log(Math.floor(10/3));    // 3 [ Before floor it gives 3.3333333n ]

// # Note => If we mode the integers where dividend's value is small from it's divisor then the answer is divisior in this case.

// ######################################[ Relational operators ]########################################################

// console.log(10 < 15);                 // false
// console.log(10 <= 10);                // true (isme equal chalra h)
// console.log(10 == 10);                // true
// console.log(10 == "10");              // true
// console.log(10 === "10");             // false
// console.log(10!==10);                 // false
// console.log(10!==8);                  // true

// ######################################[ Logical operators ]###########################################################

// # && (saari sahi honi chiaiye & agr pehli hi condition false ho gai agey check nai krega false de dega):-
// console.log(10 < 15 && 15 > 8 && 12 > 6);

// # || (saari me se ek sahi honi chiaiye & agr pehli hi condition sahi ho gai agey check nai krega true de dega):-
// console.log(10 < 15 || 4 > 8 || 12 > 6);

// ######################################[ Unary operators ]###########################################################

// # Pre increment:-

// let a = 10;
// let b = ++a;

// console.log(a);   // 11
// console.log(b);   // 11

// # Pre decrement:-

// let a = 10;
// let b = --a;

// console.log(a);   // 9
// console.log(b);   // 9

// # Post increment:-

// let a = 10;
// let b = a++;

// console.log(a);
// console.log(b);

// # Post decrement:-

// let a = 10;
// let b = a--;

// console.log(a);
// console.log(b);

// todo=> Day 2nd   (07/03/2025)

// ? Math.ceil function:-

// # Note =>  Ye number integer me upper k number ki value dega.

// console.log(Math.ceil(4.5));
// console.log(Math.ceil(4.7));
// console.log(Math.ceil(4.1));

// ? Math.floor function:-

// # Note =>  Ye number integer me nichle number ki value dega.

// console.log(Math.floor(4.5));
// console.log(Math.floor(4.7));
// console.log(Math.floor(4.1));

// ? Math.round function:-

// # Note =>  Ye number integer ki value ko round of krke dega jese agr decimal k baad 5 ya 5 se jyada hoga to ciel ki tarha or ya 5 ya useey kam hogi to floor ki tarha behave krega.

// console.log(Math.round(4.7));
// console.log(Math.round(4.5));
// console.log(Math.round(4.1));

// ? Math.abs function:-

// # Note =>  Ye number integer ki -ve ki value ko +ve or +ve ko to +ve dega hi dega.

// console.log(Math.abs(-8));
// console.log(Math.abs(-4.7));
// console.log(Math.abs(4));

// ? Math.trunc function:-

// # Note =>  Ye number integer ki value me se decimal k part ko remove krta h.

// console.log(Math.trunc(-86.56315665));
// console.log(Math.trunc(35.8264781));

// ? Math.pow function:-

// # Note =>  Ye number integer ki value me power deta h jissey uska jese ki (square,cube) nikala ja sake.

// console.log(Math.pow(5,2));
// console.log(Math.pow(3,3));

// ? Math.pow function:-

// # Note =>  Ye number integer ki value me power deta h jissey uska jese ki (square,cube) nikala ja sake.It takes two parameter first is number and second is that power what we give to first number.

// console.log(Math.pow(5,2));
// console.log(Math.pow(3,3));

// ? Math.sqrt function:-

// # Note =>  Ye number integer ki value ka square root de dega.

// console.log(Math.sqrt(36));
// console.log(Math.sqrt(225));

// ? Math.cbrt function:-

// # Note =>  Ye number integer ki value ka cube root de dega.

// console.log(Math.cbrt(216));
// console.log(Math.cbrt(729));

// ? Math.max function:-

// # Note =>  Ye number k integers me se max value de dega.

// console.log(Math.max(5, 2, 10, 17, 25));

// ? Math.max function:-

// # Note =>  Ye number k integers me se min value de dega.

// console.log(Math.min(5, 2, 10, 17, 25));

// ? Math.random function:-

// # Note =>  Ye number k integers value deta h 0 se 1 k beech me.

// console.log(Math.random());

// ? toFixed function:-

// # Note =>  Ye number k integers value k baad kitni digit decimal k baad rakhni h vo decide krta h.It will give output as string so we can convert it into number.

// let a = 252.554515;
// console.log(a.toFixed(2));
// console.log(a.toFixed(3));

// todo => Some questions on Math functions:-

// ? Question 1st => Calculate compound interest:-

// let p = Number(prompt("Enter principal ammount"));
// let r = Number(prompt("Enter rate of interest"));
// let t = Number(prompt("Enter time period"));

// let compoundInterest = (p * Math.pow(1 + r / 100, t)) - p;
// console.log(compoundInterest);

// ? Question 2nd => Generate OTP:-

// console.log(Math.random() * 9000 + 1000);

// ? Question 3rd => Area of triangle by Heron's formula:-

// let a = Number(prompt("Enter first number"));
// let b = Number(prompt("Enter second number"));
// let c = Number(prompt("Enter third number"));

// if (a + b <= c || a + c <= b || b + c <= a) {
//   console.log("Not Possible to calculate area of these values");
// } else {
//   let s = (a + b + c) / 2;
//   console.log(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
// }

// ? Question 4th => Calculate circumfrence of a circle:-

// let r = Number(prompt("Enter radius value"));
// console.log(2 * Math.PI * r);

// ! Main Questions Starts Here:-

// todo => If else questions:-

// ? Q1 => (A)  Accept two number and find which one is greatest of them:-✅

// let num1 = Number(prompt("Enter number 1st"));
// let num2 = Number(prompt("Enter number 2nd"));

// if (num1 > num2) {
//   console.log("Number 1st is greatest");
// } else {
//   console.log("Number 2nd is greatest");
// }

// ? Q1 => (B) More easy:- ✅

// let prompt = require("prompt-sync")();
// let a = Number(prompt("Enter First number"));
// let b = Number(prompt("Enter Second number"));

// if ((isNaN(a) || a == "") && (isNaN(b) || b == "")) {
//   console.log("Enter Valid inputs");
// } else {
//   let greatest = a > b ? a : b;
//   console.log(greatest);
// }

// ? Q2 => (A) Accept an integer and then check if it is even or odd:-✅

// let number = Number(prompt("Enter number to check"));

// # By else if:-

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// ? Q2 => (B) More easy (Turnary):- ✅

// let prompt = require("prompt-sync")();
// let intNum = Number(prompt("Enter your integer: "));

// if (isNaN(intNum) || intNum == "") {
//   console.log("Enter a valid Input");
// } else {
//   let CheckEven = (intNum % 2 === 0) ? "Even Number" : "Odd Number";
//   console.log(CheckEven);
// }

// ? Q3 =>  Accept two values age and name and check that if a valid voter or not:- ✅

// let prompt = require("prompt-sync")();

// let name = prompt("Enter user's Name :");
// let age = Number(prompt("Enter user's Age :"));

// if ((isNaN(age) || age == "") && (!isNaN(name) || name == "")) {
//   console.log("Enter valid inputs");
// } else {
//   let userValCheck =
//    ( age >= 18)
//       ? `${name} age ${age} years is a valid Voter.`
//       : `${name} age ${age} years is not a valid Voter.`;
//   console.log(userValCheck);
// }

// ? Q4 => (A)  Accept three number and find which one is greatest of them:-

// let dg1 = Number(prompt("Enter number one"));
// let dg2 = Number(prompt("Enter two one"));
// let dg3 = Number(prompt("Enter three one"));

// if (dg1 > dg2) {
//   console.log("Number one is greater");
// } else if (dg2 > dg3) {
//   console.log("Number two is greater");
// } else if (dg3 > dg1) {
//   console.log("Number three is greater");
// }else{
//     console.log("Number's are not given as per reqirement so not checked!")
// }

// ? Q4 => (B) More easier way:-

// let prompt = require("prompt-sync")();
// let num1 = Number(prompt("Enter number one: "));
// let num2 = Number(prompt("Enter number two: "));
// let num3 = Number(prompt("Enter number three: "));

// if (
//   (isNaN(num1) || num1 == "") &&
//   (isNaN(num2) || num2 == "") &&
//   (isNaN(num3) || num3 == "")
// )
//   console.log("Enter valid inputs");
// if (num1 > num2 && num1 > num3) console.log(num1);
// if (num2 > num3 && num2 > num1) console.log(num2);
// if (num3 > num1 && num3 > num2) console.log(num3);

// todo => Day 3rd (8/03/2025):-

// ? Q5 =>  Accept an year and get the result it is a leap year or not:-

// # Method 1st:-

// let year = Number(prompt("Enter a year"));
// let isLeap = false;

// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) isLeap = true;
//     else isLeap = fasle;
//   } else {
//     isLeap = true;
//   }
// } else {
//   isLeap = false;
// }

// console.log(isLeap ? "Is a Leap Year" : "Is not a leap year");

// # Method 2nd:-

// let year = Number(prompt("Enter a year"));

// if (year % 4 === 0 && year % 100 !== 0) {
//   console.log("It's a leap year");
// } else if (year % 400 === 0) {
//   console.log("It's a leap year");
// } else console.log("It's not a leap year");
// ? Another way of find leap year:-
// let prompt = require("prompt-sync")();

// let year = Number(prompt("Enter a year: "));

// if (isNaN(year) || year == "") {
//   console.log("Enter a valid input");
// } else {
//   let checkLeap =
//     (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//       ? `${year} is a leap year.`
//       : `${year} isn't a leap year.`;
//   console.log(checkLeap);
// }

// ? Q5 => Shop discount - Description on Graphic:-
/* ? [Ammount]                [Discount]
      0-5000                      0%
      5001-7000                   5%
      7001-9000                   10%
      more 7001                   20%
 */

// # Method 1st:-

// let amount = Number(prompt("Enter your amount"));

// if (amount >= 0 && <= 5000) {
//   console.log(amount);
// } else if ((amount > 5000) & (amount <= 7000)) {
//   console.log(amount - (amount * 5) / 100);
// } else if ((amount > 7000) & (amount <= 9000)) {
//   console.log(amount - (amount * 10) / 100);
// } else if (amount > 9000) {
//   console.log(amount - (amount * 20) / 100);
// } else {
//   console.log("Invalid inuput");
// }

// # Method 2nd:-

// let amount = Number(prompt("Enter your amount"));
// let discount = 0;

// if (amount >= 0 && amount <= 5000) discount = 0;
// else if (amount > 5000 && amount <= 7000) discount = 5;
// else if (amount > 7000 && amount <= 9000) discount = 10;
// else if (amount > 9000) discount = 20;

// console.log(amount - (discount * amount) / 100);

// ? Q6 => Bijli Bill - Description on Graphic:-
/* ? [Ammount]                   [Units]
      upto 100                  Rs. 4.2/Unit
      101-200                   Rs. 6 /Unit
      201-400                   Rs. 8 /Unit
      more than 400             Rs. 13/Unit
 */

// # Method 1st:-

// let prompt = require("prompt-sync")();
// let unit = Number(prompt("Enter your units: "));// let amount = 0;
// let amount = 0;

// if (unit > 0 && unit <= 100) {
//   amount = 4.2 * unit;
// } else if (unit > 100 && unit <= 200) {
//   amount = 4.2 * 100 + (unit - 100) * 6;
// } else if (unit > 200 && unit <= 400) {
//   amount = 100 * 4.2 + 100 * 6 + (unit - 200) * 8;
// } else if (unit > 400) {
//   amount = 100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13;
// }

// console.log(amount);

// # Method 2nd:-

// let unit = Number(prompt("Enter the units"));
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount = amount + (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount = amount + (unit - 100) * 6;
//   unit = 100;
// }
// amount = amount + 4.2 * unit;

// console.log(amount);

// todo => Day 4th (10/03/2025):-

// ? Q6. Accept an integer and Print hello world n times.

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n number: "));

// if (isNaN(n)) {
//   console.log("Invalid Input!");
// } else {
//   let i;
//   for (i = 1; i <= n; i++) {
//     console.log(i, "Hello World");
//   }
//   console.log("falied at " + i);
// }

// # Note => Entry control loop.

// ? Q7. Print natural number up to n.

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number range to print: "));
// let start = 1;

// if (isNaN(n) || n == "") {
//   console.log("Invalud Input!");
// } else {
//   for (let i = start; i <= n; i++) {
//     console.log(i);
//   }
// }

// ? Q8. Reverse for loop. Print n to 1.

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number range to print: "));
// let start = 1;
// if (isNaN(n) || n == "") {
//   console.log("Invalud Input!");
// } else {
//   for (let i = n; i >= start; i--) {
//     console.log(i);
//   }
// }

// ? Q.9 Take a number as input and print its table:-

// let number = Number(prompt("Enter number"));

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} X ${i} = ${number * i}`);
// }

// ? Q.10 Sum up to n terms:-

// let n = Number(prompt("Enter a n number"));

// let sum = 0;
// for (let i = 1; i <= n; i++) {
// //   sum += i;
//   sum = sum + i;
// }
// console.log(sum);

// ? Q.11 Factorial of a number:-

// let n = Number(prompt("Enter a n number"));

// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   //   sum *= i;
//   fact = fact * i;
// }
// console.log(fact);

// ? Q.12  Print the sum of all even & odd numbers in a range seperately:-

// let n = Number(prompt("Enter n number"));

// let evenSum = 0;
// let oddSum = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) evenSum = evenSum + i;
//   else oddSum = oddSum + i;
// }

// console.log(`Even Sum = ${evenSum}`);
// console.log(`Odd Sum = ${oddSum}`);

// ? Q.13  Print all the factors of a number.:-

// # Method1:-

// let n = Number(prompt("Enter a number for find facors of it"));

// for (let i = 1; i < n; i++) {
//   if (n % i === 0) console.log(i);
// }
// console.log(n);

// # Method2:-

// let n = Number(prompt("Enter a number for find facors of it"));

// for (let i = 1; i <= n / 2; i++) {
//   if (n % i === 0) console.log(i);
// }
// console.log(n);

// # Note => Make n/2 end range will reduce time efficiency.

// ? Q.14  Check if the number is Prime or not:-

// # Method 1:-

// let n = Number(prompt("Enter a number"));

// let isPrime = true;

// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) console.log("Prime Number");
// else console.log("Not Prime Number");

// # Method 2:-

// let n = Number(prompt("Enter a number"));

// let isPrime = true;

// for (let i = 2; i <= n/2; i++) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) console.log("Prime Number");
// else console.log("Not Prime Number");

// # Method 3- (Time complexity O of square root n):-

// let n = Number(prompt("Enter a number"));

// let prime = primeFunc(n);

// if (prime) console.log("Prime Number");
// else console.log("Not Prime Number");

// function primeFunc(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i<=Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// ? Q.15  Write a program to take two inputs a, b & find the value of a raised to the power of b:-

// let a = Number(prompt("Enter a Number"));
// let b = Number(prompt("Enter b Number"));

// function powerCalculate(a, b) {
//   let res = 1;
//   for (let i = 1; i <= b; i++) {
//     res = res * a;
//   }
//   return res;
// }
// let ans = powerCalculate(a, b);
// console.log(ans)

// todo => Day 5th (11/03/2025):-

// ? break statement:-

// # Note =>  break that given loop value condition.

// let n = Number(prompt("Enter n value"));

// for (let i = 1; i <= n; i++) {
//   if (i === 6) break;
//   console.log(i);
// }

// ? continue statement:-

// # Note =>  skip that given loop value condition.

// let n = Number(prompt("Enter n value"));

// for (let i = 1; i <= n; i++) {
//   if (i === 6) continue;
//   console.log(i);
// }

// ? While loop:-

// # Note => Entry control loop.

// let n = 5;   // ends
// let i = 1;   // starts

// while (i <= n) {
//   console.log(i);
//   i++;       // change
// }

// ? Q.17  sum of digit (while loop):-

// let userNum = Number(prompt("Enter a number"));
// let sum = 0;

// while (userNum > 0) {
//   reminder = userNum % 10;
//   sum = sum + reminder;
//   userNum = Math.floor(userNum / 10);
// }
// console.log(sum);

// ? Q.18 reverse of number:-

// let n = Number(prompt("Enter number"));

// let reverse = 0;

// while (n > 0) {
//   rem = n % 10;
//   reverse = reverse * 10 + rem;
//   n = Math.floor(n / 10);
// }
// console.log(reverse);

// ? Q.19 => Strong number check programme:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number"));

// let copy = n;
// let ans = 0;
// if (isNaN(n) || !n) {
//   console.log("Enter a valid input");
// } else {
//   while (n > 0) {
//     let digit = n % 10;
//     let fact = 1;
//     for (let i = 1; i <= digit; i++) {
//       fact = fact * i;
//     }
//     ans = ans + fact;
//     n = Math.floor(n / 10);
//   }
//   console.log(ans === copy ? "A strong Number" : "Not a string Number");
// }

// ? Q.20 Automorphic number(which ends it's square's last digit n number):-

// let n = Number(prompt("Enter number"));
// // let n = 76;
// let copyOfn = n;
// let square = n * n;

// let count = 0;
// while (n > 0) {
//   count++;
//   n = Math.floor(n / 10);
// }

// if (square % Math.pow(10, count) === copyOfn) console.log("Automorphic");
// else console.log("Not Automorphic");

// ? Switch (Control flow statement):-

// # 1 case for one condition:-

// let n = Number(prompt("Enter a number"));

// switch (n) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 1:
//     console.log("Tuesday");
//     break;
//   case 2:
//     console.log("Wednesday");
//     break;
//   case 3:
//     console.log("Thursday");
//     break;
//   case 4:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Me to chalunga hi hamesha");
//     break;
// }

// # Multiple case for one condition:-

// let n = Number(prompt("Enter a number"));

// switch (n) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Me to chalunga hi hamesha");
//     break;
// }

// # Note => If we not give break condition in switch cases fall through condition in accurs.

// todo => Day 5th (12/03/2025):-

// ? do while loop:-

// # Note => Exit control loop.

// ? Q21.  Print hello world:-

// let i = 1;

// do {
//   console.log(i, "Hello World");
//   i++;
// } while (i <= 5);

// ? Q22. Print namaste duniya when user say yes:-

// let userInput;
// do {
//   console.log("Namaste 🙏 Dunita...😁");
//   userInput = prompt("Enter yes/no to repeat the message").toLowerCase();
// } while (userInput === "yes");

// ? Q23. Guess the number:-

// let compNum = Math.floor(Math.random() * 100) + 1;

// let userNum;

// do {
//   userNum = Number(prompt("Enter a number between 1 to 100"));
//   if (isNaN(userNum) || userNum > 100 || userNum < 0) {
//     console.log("Invalid Input");
//     continue;
//   }
//   if (userNum > compNum) console.log("It's too large");
//   else if (userNum < compNum) console.log("It's too small");
//   else console.log("Congrats 🎉 number matched and it is ", compNum);
// } while (compNum !== userNum);

// ? Q24. Sasta calculator:-

// let userAction;

// do {
//   let num1 = Number(prompt("Enter number one"));
//   let num2 = Number(prompt("Enter number two"));
//   let operator = prompt("Enter an operator like +,-,*,/");
//   switch (operator) {
//     case "+":
//       console.log(`Result ${num1 + num2}`);
//       break;
//     case "-":
//       console.log(`Result ${num1 - num2}`);
//       break;
//     case "*":
//       console.log(`Result ${num1 * num2}`);
//       break;
//     case "/":
//       if (num2 !== 0) console.log(`Result ${num1 / num2}`);
//       break;
//     default:
//       console.log("Enter a valid input");
//       break;
//   }
//   userAction = prompt(
//     "If you want to re run the programme then say yes/no"
//   ).toLowerCase();
// } while (userAction === "yes");

// ? Q25. Project restruant:-

// ! Node done yet

// todo => Day 6th (17/03/2025):-

// ? Normal star printing in a line:-

// for (let i = 1; i <= 5; i++) {
//   process.stdout.write("* ");
// }

// ? Basic loop nesting trick of print row and columns for a star:-

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>
//   * * * * *
//   * * * * *
//   * * * * *
//   * * * * *
//   * * * * *

// ? Prompt sync for terminal run:-

// ? Eg1:-

// const prompt = require("prompt-sync")();
// let a = prompt("Enter a number:");

// console.log(a);

// ? Eg2:-

// const prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// ? Q26. Print right angle star pattern:-

// const prompt = require("prompt-sync")();
// let n = prompt("Enter a  number:");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>
//   *
//   * *
//   * * *
//   * * * *
//   * * * * *

// ? Q27. Print right angle digit pattern:-

// const prompt = require("prompt-sync")();
// let n = prompt("Enter a  number:");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>
//   1
//   1 2
//   1 2 3
//   1 2 3 4
//   1 2 3 4 5

// ? Q28. Print right angle alphabets pattern:-

// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number:");

// for (let i = 1; i <= n; i++) {
//   let temp = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(temp) + " ");
//     temp++;
//   }
//   console.log();
// }

//  Upper Basic nesting output =>
// A
// A B
// A B C
// A B C D
// A B C D E

// ? Q29. Print inverted right angle triangle star pattern:-

// const prompt = require("prompt-sync")();
// let n = prompt("Enter a  number:");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//  Upper Basic nesting output =>
//   * * * * *
//   * * * *
//   * * *
//   * *
//   *

// todo => Day 7th (18/03/2025):-

// ? Q30. Mirror right angle triangle star pattern:-

// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write("  ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>
//           *
//         * *
//       * * *
//     * * * *
//   * * * * *

// ? Q31. Triangle star pattern:-

// let prompt = require("prompt-sync")();
// let n = prompt("Enter a number");

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>
//        *
//       * *
//      * * *
//     * * * *
//    * * * * *

// ? Q32. X star pattern:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number value:"));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i === j || (i + j === n + 1)) {
//       process.stdout.write("* ");
//     } else process.stdout.write("  ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>

// *       *
//   *   *
//     *
//   *   *
// *       *

// ? Q33. V star pattern:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number value:"));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= (n * 2) - 1; j++) {
//     if (i === j || i + j === n * 2) {
//       process.stdout.write("* ");
//     } else process.stdout.write("  ");
//   }
//   console.log();
// }

// # Upper Basic nesting output =>

// *                *
//   *            *
//     *        *
//       *    *
//         *

// todo => Day 8th (19/03/2025):-

// ? Arrays in JS:-

// ? push method (add one or more elements in the last of an array):-

// let arr = [20, 30, 40, 50];
// arr.push(60);
// arr.push(60,70,80);
// console.log(arr);

// ? pop method (remove an element in the last of an array):-

// let arr = [20, 30, 40, 50];
// arr.pop();
// console.log(arr);

// ? unshift method (add one or more elements in the start of an array):-

// let arr = [20, 30, 40, 50];
// arr.unshift(10);
// arr.unshift(2, 5);
// console.log(arr);

// ? shift method (remove one element in the start of an array):-

// let arr = [20, 30, 40, 50];
// arr.shift();
// console.log(arr);

// ? length property (It defines the length of an array):-

// let arr = [20, 30, 40, 50];
// console.log(arr.length);

// ? Assign the values to an array:-

// let arr = [20, 30, 40, 50];

// arr[10] = 1000;
// console.log(arr);               // form 4th index to 9th index values will be empty and all holds undefined.
// console.log(arr[4]);            // undefined
// console.log(arr[5]);            //    ""
// console.log(arr[6]);            //    ""
// console.log(arr[7]);            //    ""
// console.log(arr[8]);            //    ""
// console.log(arr[9]);            //    ""

//? After define length of array then push an element:-

// let arr = new Array(4);
// arr[5] = 20;
// console.log(arr);      // 5 empty elements then 20 pushed in it.

// ? Creating dynamic array:-

// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter array's size"));
// let arr = new Array(size);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter element"));
// }
// console.log(arr);

// ? Q34. find sum of array elements:-

// let arr = [20, 30, 50, 60, 70];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log("Sum is =",sum);

// ? Q35. find the largest number in an array:-

// let arr = [2, 5, 1, 8, 74, 6, 54, 1];
// let max = arr[0];

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// ? Q36 find the smallest number in an array:-

// let arr = [2, 5, 1, 8, 74, 6, 54, 1];
// let min = arr[0];

// for (let i = 1; i < arr.length - 1; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// ? Q36 find the second largest element in array:-

// let arr = [25, 84, 76, 95, 45, 101, 21, 126, 89];

// let max = Math.max(arr[0], arr[1]);
// let secMax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secMax = max;
//     max = arr[i];
//   } else if (arr[i] > secMax arr[i] !== max) {
//     secMax = arr[i];
//   }
// }
// console.log(secMax);

// ? Q36 find the second minimum element of an array:-

// let arr = [20, 45, 67, 84, 69, 124, 68, 47, 96];

// let min = Math.min(arr[arr.length - 1], arr[arr.length - 2]);
// let sMin = Math.max(arr[arr.length - 1], arr[arr.length - 2]);

// for (let i = arr[arr.length - 3]; i >= 0; i--) {
//   if (arr[i] < min) {
//     sMin = min;
//     min = arr[i];
//   } else if (sMin < arr[i] || arr[i] != min) {
//     sMin = arr[i];
//   }
// }
// console.log(sMin);

// ? Q37. Reverse the array elements of array:-

// ? Method 1st (With extra space):-

// let arr = [1, 2, 3, 4, 5, 6];

// let temp = new Array(arr.length);
// let i = 0;

// for (let j = arr.length - 1; j >= 0; j--) {
//   temp[i] = arr[j];
//   i++;
// }
// console.log(temp);

// ? Method 2nd (Without space &  It is two pointer algorythem):-

// let arr = [1, 2, 3, 4, 5, 6];

// let i = 0,
//   j = arr.length - 1;

// while (i < j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   j--;
// }
// console.log(arr);

// ? Q38. All zero are left and all one are at right of array(By two pointer Algorythem):-

// let arr = [1, 1, 0, 1, 1, 0, 0, 1];

// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }

// console.log(arr);

// ? Q39. Array left rotation by 1:-

// let arr = [1, 2, 3, 4, 5];

// let temp = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

// ? Q40. Array right rotation by 1:-

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);

// todo => Day 9th (27/03/2025):-

// ? Q40. Array left rotation by K element (which given by user):-
// ?Bruteforce method:-

// let arr = [1, 2, 3, 4, 5];
// let k = 7;
// k = k % arr.length;            //  as mods reminder val 2 so rotate 2 times.

// for (let j = 1; j <= k; j++) {
//   let index1stVal = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = index1stVal;
// }
// console.log(arr);

// ? Q41. Array left rotation by K element:-
// ? Efficient method:-

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = 7;
// k = k % arr.length;

// for (let i = 0; i < arr.length; i++) {
//   temp[i] = arr[(i + k) % arr.length];
// }
// console.log(temp);

// ? Q42. Array left rotation by K element:-
// ? More Efficient & reliable method:-

// let prompt = require("prompt-sync")();
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter user's value: "));
// k = k % arr.length;
// arrayLeftKrotate(arr, 0, k - 2);
// arrayLeftKrotate(arr, k, arr.length - 1);
// arrayLeftKrotate(arr, 0, arr.length - 1);

// function arrayLeftKrotate(arr, i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }
// console.log(arr);

// ? Q43. Linear Search an array - If element found print the index else :-1

// let prompt = require("prompt-sync")();
// let target = Number(prompt("Enter a value to search: "));
// let arr = [20, 54, 75, 67, 12, 47];
// let index = -1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     index = i;
//   }
// }
// if (index === -1) console.log("Element not found");
// else console.log(`Element found and It is ${arr[index]} on ${index} index position.`)

// ? Q44. Binary Search an array - If element found print the index else :-1

// ! we Shrinking the window in this method;-

// let prompt = require("prompt-sync")();
// let arr = [5, 8, 12, 19, 75, 100, 150, 170];
// let target = Number(prompt("Enter target value to search: "));

// let binaryFoundRes = binarySearch(arr, target) === -1 ? "Element not found" : "Element found";
// console.log(binaryFoundRes);

// function binarySearch(arr, target) {
//   let s = 0,
//     e = arr.length - 1;
//   while (s <= e) {
//     let mid = Math.floor((s + e) / 2);
//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) s = mid + 1;
//     else e = mid - 1;
//   }
//   return -1;
// }

// todo => Day 10th (28/03/2025):-

//! Sorting algorithm (2 types):-

// Stable sort
// Unstable sort

// ? Q45.  Bubbule sort:-

// let arr = [175, 45, 97, 24, 86, 47];
// let n = arr.length;

// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i + 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// ? Q45.  Selection sort:-

// let arr = [50, 74, 24, 87, 64, 14];

// for (let i = 0; i < arr.length - 1; i++) {
//   let small = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[small] > arr[j]) small = j;
//   }
//   if (i !== small) {
//     let temp = arr[i];
//     arr[i] = arr[small];
//     arr[small] = temp;
//   }
// }
// console.log(arr);

// ? Q45.  Incertion sort:-

// let arr = [44, 87, 92, 75, 23, 17, 9];
// //         j   i
// //        i-1 j+1

// for (let i = 1; i < arr.length; i++) {
//   let key = arr[i];
//   let j = i - 1;
//   while (i >= 0 && arr[j] > key) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = key;
// }
// console.log(arr);

// todo => Day 11th (01/04/2025):-

// !   Multi dimentional array:-

// ? Treverse all elements of a 2D array (By Hard coaded Input):-

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     process.stdout.write(`${arr[i][j]} `);
//   }
//   console.log();
// }

// ? Create a 2D array (By Users Dynamic Input):-

// let prompt = require("prompt-sync")();
// let outerArrSize = Number(prompt("Enter outer array size: "));
// let innerArrSize = Number(prompt("Enter inner array size: "));
// let arr = new Array(outerArrSize);

// if (
//   (isNaN(outerArrSize) || outerArrSize == "") ||
//   (isNaN(innerArrSize) || innerArrSize == "")
// ) {
//   console.log("Invalid Input");
// } else {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(innerArrSize);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       arr[i][j] = Number(prompt("Enter elements: "));
//     }
//   }
//   console.log(arr);
// }

// ? Treverse all elements of a 3D array:-

// let arr = [
//   [[1, 2, 3],[4, 5, 6],],
//   [[7, 8, 9],[10, 11, 12],],
//   [[13, 14, 15],[6, 17, 18],],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       process.stdout.write(`${arr[i][j][k]} `);
//     }
//     console.log();
//   }
// }

// ? Create dynamically  a 3D array:-
// ! not done:-

// ? Q46 Digonals sum:-

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 5, 9],
// ];
// let leftDigonalSum = 0;
// let rightDigonalSum = 0;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i === j) leftDigonalSum += arr[i][j];
//     if (i + j === arr.length - 1) rightDigonalSum += arr[i][j];
//   }
// }
// console.log("Right Digional sum =>", rightDigonalSum);
// console.log("Left Digional sum =>", leftDigonalSum);

// ? Q47 Zagged array:-

// let prompt = require("prompt-sync")();
// let size = Number(prompt("Enter array size: "));
// let arr = new Array(size);

// for (let i = 0; i < arr.length; i++) {
//   let insideArrLength = Number(prompt("Enter inside array length: "));
//   arr[i] = new Array(insideArrLength);
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = Number(prompt("Enter elemets: "));
//   }
// }

// console.log(arr);

// ? Loop for Jagged showing (For upper code):-

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//  ! One liner code for making empty array:-

// ? By array element's number length and number:-

// let arr = Array.from({ length: 3 }, () => Array(4).fill(0));
// console.log(arr);

// ? By array element's number and array length:-

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let arr = Array.from({ length: matrix[0].length }, () => Array(matrix.length));
// console.log(arr)

// todo => Day 12th (03/04/2025):-

// ? Q48 Transpose matrix (one liner array make and put the values in it):-

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let arr = Array.from({ length: matrix[0].length }, () => Array(matrix.length));

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = matrix[j][i];
//   }
// }

// ? loop for print as matrix patter:-

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr);

// ? Q49 Transpose matrix (one liner array make and put the values in it):-

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let row = matrix.length;
// let col = matrix[0].length;

// let arr = new Array(col);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(row);
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = matrix[j][i];
//   }
// }

// ? Print array's index element as an array:-

// for (let i = 0; i < arr.length; i++) {
// console.log(arr[i]);
// }

// console.log(arr);

// ? Q50 Rotate an image (n*n) matrix and don't make create extra space:-

// Intutions of this problem => It is the combination of transpose and reverse.

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = i; j < matrix[i].length; j++) {
//     let temp = matrix[i][j];
//     matrix[i][j] = matrix[j][i];
//     matrix[j][i] = temp;
//   }
// }
// for (let i = 0; i < matrix.length; i++) {
//   let k = 0;
//   let l = matrix[i].length - 1;
//   while (k < l) {
//     let temp = matrix[i][k];
//     matrix[i][k] = matrix[i][l];
//     matrix[i][l] = temp;
//     k++;
//     l--;
//   }
// }
// console.log(matrix);

// ? For print as final input:-

// for (let i = 0; i < matrix.length; i++) {
//   console.log(matrix[i]);
// }

// ? Q51 Spiral matrix:-

// ! Not done:-

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];

// todo => Day 13th (05/04/2025):-

// ? Strings are immutable or not (Proof that here):-

// let arr = [10, 20, 30, 40, 50];
// arr[3] = 100;
// console.log(arr);                // changes happened.

// let s = "sheriyans";
// s[3] = "x";
// console.log(s);                  // No change appear in it because string is immutable.

// ! Strings methods:-

// ? slice method in string:-

// let s = "sheriyans";
// console.log(s.slice(3));
// console.log(s.slice(3,7));
// console.log(s.slice(-3));
// console.log(s.slice(-7,-5));

// ? substring method in string (it can't take negative indexes):-

// console.log(s.substring(3,7));
// console.log(s.substring(-3));

// ? uppercase and lowercase method in string:-

// let s = "sheriyans";
// let s1 = "sherYians";
// console.log(s.toUpperCase());
// console.log(s1.toLowerCase());

// ?  concat method in string:-

// let s = "Sheriyans";
// console.log(s.concat(" Coding School is , situated in Bhopal"));

// ?  trim method in string:-

// let s = "      sheriyans coading school           ";
// console.log(s.trim());

// ?  indexOf method in string:-

// let s = "Sheriyans";
// console.log(s.indexOf("yans"));

// ? include method in string:-

// let s = "Ram is a good boy.";
// console.log(s.includes("good"));
// console.log(s.includes("Good"));

// ? startswith method in string:-

// let s = "sheriyans coading school";
// console.log(s.startsWith("sher"));     // true
// console.log(s.startsWith("Sher"));     // fasle

// ? endswith method in string:-

// let s = "sheriyans coading school";
// console.log(s.endsWith("hool"));     // true
// console.log(s.endsWith("ooL"));     // fasle

// ? split method in string:-

// let s = "sheriyans,coading,school";
// console.log(s.split(","));

// ? lastindex method in string:-

// let text = "Hello world, welcome to the world!";
// console.log(text.lastIndexOf("world")); // 27
// console.log(text.lastIndexOf("code"));  // -1

// ? replace method in string:-

// let s = "The dog,is a good Dog.";
// console.log(s.replace("Dog", "Cat"));

// ? replaceAll method in string:-

// let s = "The dog,is a good dog.";
// console.log(s.replaceAll("dog", "Cat"));

// ? charAt method in string:-

// let s = "Sheriyans";
// console.log(s.charAt(0));
// console.log(s.charAt(5));

// ? replaceAll method in string:-

// let s = "Sheriyans";
// console.log(s.charCodeAt(0));      // 83
// console.log(s.charCodeAt(4));      // 105

// ? Q52. Accept a string from user and print each character on a new line...?

// let prompt = require("prompt-sync")();
// let str = prompt("Enter string value: ");
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// ? Q53. Accept a string and print it in reverse order...?

// let prompt = require("prompt-sync")();
// let str = prompt("Enter string value: ");
// let reverseStr = "";
// for (let i = str.length; i >= 0; i--) {
//   reverseStr = reverseStr + str.charAt(i);
// }
// console.log(reverseStr);

// todo => Day 14th (11/04/2025):-

// ? Q54. Check if string is palindrome (using two-pointer):-

// let prompt = require("prompt-sync")();
// let str = prompt("Enter a string: ");
// let isPalindrome = true;
// let i = 0;
// let j = str.length - 1;

// while (i < j) {
//   if (str[i] !== str[j]) {
//     isPalindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }

// if (isPalindrome) console.log("Given string is a palindrome");
// else console.log("Given string is not a palindrome");

// ? Q55.  Toggle each alphabet using ASCII values:-

// let prompt = require("prompt-sync")();
// let str = prompt("Enter a string: ");
// let ans = "";
// console.log(str);

// for (let i = 0; i < str.length; i++) {
//   let ascaiVal = str.charCodeAt(i);
//   if (ascaiVal >= 65 && ascaiVal <= 90) {
//     ans = ans + String.fromCharCode(ascaiVal + 32);
//   } else if (ascaiVal >= 97 && ascaiVal <= 122) {
//     ans = ans + String.fromCharCode(ascaiVal - 32);
//   }
// }
// console.log(ans);

// ? Q56.   Count words with given prefix:-

// let arrStr = ["attention", "attend", "atpoint", "adjust"];

// let str = "at";
// let count = 0;

// for (let i = 0; i < arrStr.length; i++) {
//   if (arrStr[i].startsWith(str)) count++;
// }
// console.log(count);

// ? Q57.   Capitalize first & last character of each word:-

// let str = "hello bhai kya haal chaal";
// let strArr = str.split(" ");
// let ans = "";

// for (let i = 0; i < strArr.length; i++) {
//   let word = strArr[i];
//   if (word.length <= 2) {
//     ans = ans + word.toUpperCase() + " ";
//   } else {
//     ans =
//       ans +
//       word.charAt(0).toUpperCase() +
//       word.substring(1, word.length - 1) +
//       word.charAt(word.length - 1).toUpperCase() +
//       " ";
//   }
// }
// console.log(ans);

// todo => Day 15th (12/04/2025):-

// ? Q58.   Frequency of Each Character (Using Bitmap / Integer Array):-

// let prompt = require("prompt-sync")();
// let str = prompt("Enter a string value: ");
// let freqArr = new Array(122).fill(0);

// for (let i = 0; i < str.length; i++) {
//   let ascaiVal = str.charCodeAt(i);
//   freqArr[ascaiVal] = freqArr[ascaiVal] + 1;
// }

// for (let i = 0; i < freqArr.length; i++) {
//   if (freqArr[i] > 0) {
//     console.log(String.fromCharCode(i) + " = " + freqArr[i]);
//   }
// }

// ? Q59.   Check Two Strings Are Anagram Or Not (Using Frequency Array):-

// let prompt = require("prompt-sync")();
// let str1 = prompt("Enter string one: ");
// let str2 = prompt("Enter string two: ");
// let freqArr = new Array(122).fill(0);

// if (str1.length !== str2.length) {
//   console.log("Both strings are not anagram (length differ).");
// } else {
//   let isAnagram = true;
//   for (let i = 0; i < str1.length; i++) {
//     let ascaiVal = str1.charCodeAt(i);
//     freqArr[ascaiVal] = freqArr[ascaiVal] + 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let ascaiVal = str2.charCodeAt(i);
//     freqArr[ascaiVal] = freqArr[ascaiVal] - 1;
//   }
//   for (let i = 0; i < freqArr.length; i++) {
//     if (freqArr[i] !== 0) {
//       isAnagram = false;
//       break;
//     }
//   }
//   if (isAnagram) console.log("Both strings are anagram.");
//   else console.log("Both strings are not anagram (characters differ).");
// }

// ? Sets in strings:-

// ? Define a set:-

// let set = new Set();

// ? Add elements in a set:-

// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(10);
// set.add(30);
// set.add(40);
// set.add(30);
// set.add(50);
// console.log(set);

// ? Delete elements in a set:-

// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.delete(20);
// set.delete(30);
// console.log(set);

// ? has method in a set:-

// let set = new Set();
// set.add(10);
// set.add(20);
// console.log(set.has(10));
// console.log(set.has(100));

// ? has method in a set:-

// let set = new Set();
// set.add(10);
// set.add(20);
// console.log(set.has(10));
// console.log(set.has(100));

// ? clear property in set:-

// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.clear();
// console.log(set);

// ? Treverse all elements in a set:-

// let set = new Set();
// set.add(10);
// set.add(20);
// set.add(30);
// set.add(40);

// for (let a of set) {
//   process.stdout.write(a + " ");
// }

// ? Q60.   Check if the Sentence Is Pangram (using set):-

// let prompt = require("prompt-sync")();
// let sentence = prompt("Enter your sentance: ");
// let set = new Set();

// for (let i = 0; i < sentence.length; i++) {
//   let ascai = sentence.charCodeAt(i);
//   set.add(ascai);
// }

// let checkPangram = set.size === 26 ? true : false;
// console.log(checkPangram);

// ? Checking data:-
// for true checking = "thequickbrownfoxjumpsoverthelazydog";
// for false checking = "leetcode";

// ? Q60.  (LC => 771) Jewels and Stones:-

// function findJewelsCount(jewels, stones) {
//   let set = new Set();
//   for (let i = 0; i < jewels.length; i++) {
//     set.add(jewels.charAt(i));
//   }
//   let count = 0;
//   for (let i = 0; i < stones.length; i++) {
//     let char = stones.charAt(i);
//     if (set.has(char)) count++;
//   }
//   return count;
// }
// let res = findJewelsCount("aA", "aAAbbbb");
// console.log(res);

// ? Q60.  (LC => 202) Happy Number:-

// function findHappyNum(n) {
//   let set = new Set();
//   while (true) {
//     let sum = 0;
//     while (n > 0) {
//       let rem = n % 10;
//       sum = sum + rem * rem;
//       n = Math.floor(n / 10);
//     }
//     if (sum === 1) return true;
//     if (set.has(sum)) return false;
//     else set.add(sum);
//     n = sum;
//   }
//   return false;
// }

// let res = findHappyNum(11);
// console.log(res);

// ? Map in Javascript:-

// let map = new Map();
// map.set("name", "Tarun");
// map.set("age", 29);
// map.set("isDevLerner", true);
// console.log(map);

// ? Key are unique but also values are also unique but when key is unique and we give value to it again then it update the value:-

// let map = new Map();
// map.set("Tarun", 7);
// map.set("Vedant", 3);
// map.set("Mandar", 2);
// map.set("Raj", 4);
// map.set("Tarun", 4);
// console.log(map);

// ? When we want to delete any map setted key value pair then we will give it's key value to it:-

// map.delete("Mandar");
// console.log(map);

// ? When we want to excess has any map setted key value pair then we will give it's key value to it:-

// console.log(map.has("Vikash"));
// console.log(map.has("Vedant"));

// ? When we want to get any map setted key value pair then we will give it's key value to it:-

// let map = new Map();
// map.set("name", "Tarun");
// map.set("age", 29);
// console.log(map.get("name"));

// ? Size property in map:-

// console.log(map.size);

// ? clear method in map:-

// map.clear();

// ? keys and values method in Map:=

// let map = new Map();
// map.set("name", "TARUN");
// map.set("age", 29);
// map.set("male", true);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// ? Iterate over keys and values of a map:-

// let map = new Map();
// map.set("name", "TARUN");
// map.set("age", 29);
// map.set("male", true);

// for (let a of map.keys()) {
//   console.log(a);
// }

// for (let a of map.values()) {
//   console.log(a);
// }

// for (let a of map.entries()) {
//   console.log(a);
// }

// for (let [keys, values] of map) {
//   console.log(keys + " => " + values);
// }

// ? Q61. find the frequency of all array elements:-

// let arr = [1, 2, 1, 3, 5, 7, 10, 8, 4, 9, 10, 4, 6, 8, 5];
// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1);
//   } else {
//     map.set(arr[i], 1);
//   }
// }
// console.log(map);

// ? Q62. find the frequency of all alphabets in a string:-

// let str = "malayalam";
// let map = new Map();

// for (let i = 0; i < str.length; i++) {
//   let char = str.charAt(i);
//   if (map.has(char)) {
//     map.set(char, map.get(char) + 1);
//   } else map.set(char, 1);
// }
// console.log(map);

// todo Day 15th (15/04/2025):-

// ? Q63. (LC - 1) (A) Two sum (Brute-force method):-

// let arr = [11, 2, 15, 7];
// let i = 0;
// let j = i + 1;
// let target = 13;

// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// let resTwoSum = twoSum(arr, target);
// console.log(resTwoSum);

// ? Q63. (LC - 1) (B) Two sum (Efficient method):-

// let nums = [11, 2, 15, 7];
// let map = new Map();
// let ansArr = [-1, -1];
// let target = 9;

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       ansArr[0] = i;
//       ansArr[1] = map.get(target - nums[i]);
//       return ansArr;
//     } else map.set(nums[i], i);
//   }
// }
// let resOfTwoSum = twoSum(nums, target);
// console.log(resOfTwoSum);

// ? Q64. (LC - 2351) First Letter to Appear Twice:-

// let str = "abccdefgg";
// let map = new Map();

// function AppearTwice(str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i);
//     if (map.has(char)) {
//       map.set(char, map.get(char) + 1);
//       if (map.get(char) === 2) return char;
//     } else map.set(char, 1);
//   }
// }
// console.log(AppearTwice(str));

// ? Q65. (LC - 2418) Sort the People:-

// let names = ["Marry", "John", "Emma"];
// let heights = [180, 165, 170];
// let map = new Map();

// function sortThePeoples(names, heights) {
//   for (let i = 0; i < names.length; i++) {
//     map.set(heights[i], names[i]);
//   }
//   heights.sort((a, b) => b - a);
//   let ans = new Array(names.length);
//   for (let i = 0; i < heights.length; i++) {
//       ans[i] = map.get(heights[i])
//   }
//   return ans;
// }
// let resOfSortThePeople = sortThePeoples(names,heights);
// console.log(resOfSortThePeople);

// todo Day 16th (16/04/2025):-

// ? Q66. Swap two variables without third variable:-
// ? Hint -> We are using zor operator.
// function swapTwoVariables(a, b) {
//   a = a ^ b;
//   b = a ^ b;
//   a = a ^ b;
//   return [a, b];
// }
// let resOfSwaping = swapTwoVariables(5, 10);
// console.log(resOfSwaping);

// ? Q67. Check if a number is even or odd by (end operator):-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// function checkEvenOdd(n) {
//   let res = (n & 1) === 0 ? "Even Number" : "Odd Number";
//   return res;
// }
// let resEvenOdd = checkEvenOdd(n);
// console.log(resEvenOdd);

// ? Q68. Check if a number is power of 2 or not(use end operator):-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter the number: "));

// function checkTwosPower(n){
// let res = n > 0 && (n & (n-1)) === 0 ? "Yes,It is power of two":"No,It is not a power of two";
// return res;
// }
// let resTwoPower = checkTwosPower(n);
// console.log(resTwoPower);

// todo Day 17th (17/04/2025):-

// ? Recursion Deff. -> A function calling again and again until unless it not found the base condition.

// ? Q69. Print n time hello world:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// function temp(a) {
//   if (a === 0) return;
//   console.log("Hello World");
//   temp(a - 1);
// }
// temp(n);

// ! Note => In place of (n-1) we can use --n it work same because pre decrement do decrement first but post n-- use the value then decrement it so post can't be used.

// ? Q70. Print n values from n to 1:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// function temp(a) {
//   if (a === 0) return;
//   process.stdout.write(a + " ");
//   temp(a - 1);
// }
// temp(n);

// todo Day 18th (24/04/2025):-

// ? Q71. Print n values from 1 to n:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// function temp(n) {
//   if (n === 0) return;
//   temp(n - 1);
//   process.stdout.write(n + " ");
// }
// temp(n);

// ? Q72. Print sum of 1 to n values:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n value: "));

// function sum(n) {
//   if (n === 1) return n;
//   return n + sum(n - 1);
// }
// let res = sum(n);
// console.log(res);

// ? Q72. Print factorial of 1 to n values:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n value: "));

// function fact(n) {
//   if (n === 1) return n;
//   if (n === 0) return 1;
//   return n * fact(n - 1);
// }
// let res = fact(n);
// console.log(res);

// ? Q73. Print fabonacci series uptp to n values (By using Loops):-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n value: "));
// let first = 0;
// let second = 1;
// process.stdout.write(first + " " + second + " ")

// for (let i = 1; i < n - 2; i++) {
//   let third = first + second;
//   process.stdout.write(third + " ");
//   first = second;
//   second = third;
// }

// ? Q74. Print fabonacci series uptp to n values (By using recursion):-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n value: "));
// let first = 0;
// let second = 1;
// process.stdout.write(first + " " + second + " ");

// function fabonaciSeries(n, first, second) {
//   if (n === 0) return;
//   let third = first + second;
//   process.stdout.write(third + " ");
//   fabonaciSeries(n - 1, second, third);
// }
// fabonaciSeries(n - 2, first, second);

// ? Q75. Print fabonacci series sum upto to n values (By using recursion):-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n value: "));

// function febonacciSum(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return febonacciSum(n - 1) + febonacciSum(n - 2);
// }
// let res = febonacciSum(n);
// console.log(res);

// todo Day 19th (25/04/2025):-

// ? Q76. Sum of digits (By using recursion):-

// let n = 891;
// function sumOfDigits(n) {
//   if (n < 10) return n;
//   return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }
// let resOfSum = sumOfDigits(n);
// console.log(resOfSum);

// ? Q77. Reverse digits (By using recursion):-

// let n = 891;

// function reverseDigit(n, rev) {
//   if (n === 0) return rev;
//   return reverseDigit(Math.floor(n / 10), rev * 10 + (n % 10));
// }
// let resOfRev = reverseDigit(n, 0);
// console.log(resOfRev);

// ? Q78. GCD/HCF of two numbers:-

// let a = 32;
// let b = 20;

// for (let i = Math.min(a, b); i >= 1; i--) {
//   if (a % i === 0 && b % i === 0) {
//     console.log(i);
//     break;
//   }
// }

// ? Q78. GCD/HCF of two numbers:-
// ? A:-
// let a = 18,
//   b = 28;
// while (a !== b) {
//   if (a > b) a = a - b;
//   else b = b - a;
// }
// console.log(a);

// ? Q78. GCD/HCF of two numbers by recursive (Euclidean Theorem):-
// ? B:-

// let a = 18;
// let b = 28;

// function gcdRecursive(a, b) {
//   if (a === b) return a;
//   if (a > b) return gcdRecursive(a - b, b);
//   else return gcdRecursive(a, b - a);
// }
// console.log(gcdRecursive(a, b));

// ? Q79. GCD/HCF of two numbers by recursive (Euclidean Theorem):-
// ? C:-

// function gdcByUclidean(a, b) {
//   if (b === 0) return a;
//   return gdcByUclidean(b, a % b);
// }
// let resOfGcd = gdcByUclidean(16, 18);
// console.log(resOfGcd)

// ? Q80. Give prime numbers between 1 to n numbers (Sieve of erathosthenes):-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n number: "));

// function checkPrimeRange(n) {
//   let primeArr = new Array(n + 1).fill(true);
//   for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (primeArr[i] === true) {
//       for (let j = i * i; j <= n; j += i) {
//         primeArr[j] = false;
//       }
//     }
//   }
//   for (let i = 1; i <= primeArr.length; i++) {
//     if (primeArr[i]) process.stdout.write(i + " ");
//   }
// }
// checkPrimeRange(n);

// ? Q81. Give qrt(x) Efficient:-

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n number: "));
// let i = 1;
// function sqNumFind(n) {
//   for (; i * i <= n; i++) {
//     if (i * i === n) return i;
//   }
//   return i - 1;
// }
// let res = sqNumFind(n);
// console.log(res);

// ? Q81. Give qrt(x) Efficient:-

// let x = 2;
// let n = 10;

// let pow = function (x, n) {
//   if (n === 0) return 1;
//   return n < 0 ? 1 / temp(x, n) : temp(x, n);
// };

// let temp = function (x, n) {
//   if (n === 0) return 1;
//   let ans = temp(x, parseInt(n / 2));
//   if (n % 2 === 0) return ans * ans;
//   return ans * ans * x;
// };
// let res = pow(x, n);
// console.log(res);

// todo Day 20th (28/04/2025):-

// ? Q82. Merge Two sorted arrays into one Array:-

// let arr1 = [2, 4, 5];
// let arr2 = [1, 4, 7, 10, 15];

// let ans = new Array(arr1.length + arr2.length);
// let i = 0,
//   j = 0,
//   k = 0;

// while (i < arr1.length && j < arr2.length) {  // ( i ,j andar hone chaiye arr1,arr2  ki length k)
//   if (arr1[i] < arr2[j]) {
//     ans[k++] = arr1[i++];
//   } else {
//     ans[k++] = arr2[j++];
//   }
// }

// while (i < arr1.length) {   // ( i arr1 ki length k andar h matlab j exaust )
//   ans[k++] = arr1[i++];
// }
// while (j < arr2.length) {   // ( j arr2 ki length k andar h matlab i exaust )
//   ans[k++] = arr2[j++];
// }
// console.log(ans);

// ? Q83. Merge Sorted Array:-

// let nums1 = [5, 6, 0, 0];
// let nums2 = [1, 2];
// let m = 2,
//   n = 2;

// function mergeSortedArr(nums1, m, nums2, n) {
//   let i = m - 1,
//     j = n - 1,
//     k = nums1.length - 1;
//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) nums1[k--] = nums1[i--];
//     else nums1[k--] = nums2[j--];
//   }
//   while (j >= 0) {
//     nums1[k--] = nums2[j--];
//   }
//   return nums1;
// }
// let res = mergeSortedArr(nums1, m, nums2, n);
// console.log(res);

// ? Q84. Remove duplicated from Array:-

// ? (A) - Bruteforce way:-

// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// let arrRes = new Set(arr);
// console.log(arrRes);

// ? (B) - Optimised way:-

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let j = 1;

// function removeDuplcates(nums) {
//   for (i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }
//   return j;
// }
// console.log(removeDuplcates(nums));

// ? Q85. Move zeros from Array:-
// !Not done yet.

// ? Q86. Maximum subarray (Kadane's Algorithm):-

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// function subarrayFun(arr) {
//   let sum = 0;
//   let maxSum = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > maxSum) maxSum = sum;
//     if (sum < 0) sum = 0;
//   }
//   return maxSum;
// }
// let res = subarrayFun(arr);
// console.log(res);

// ? Q87. Majority Element (Boyer-Moore Voting Algorithm):-

// let arr = [2, 2, 1, 1, 1, 2, 2];
// function majorityElemeFun(arr) {
//   let ans = arr[0];
//   let count = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === ans) {
//       count++;
//     } else {
//       count--;
//       if (count === 0) {
//         ans = arr[i];
//         count = 1;
//       }
//     }
//   }
//   return ans;
// }
// let res = majorityElemeFun(arr);
// console.log(res);

// ? Q88. Best Time to Buy and Sell Stock:-

// let arr = [7, 1, 5, 3, 6, 4];

// function bestTimeSaleStock(arr) {
//   let min = arr[0];
//   let maxProfit = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     let currProfit = arr[i] - min;
//     if (currProfit > maxProfit) {
//       maxProfit = currProfit;
//     }
//   }
//   return maxProfit;
// }
// let res = bestTimeSaleStock(arr);
// console.log(res);

// ? Q89. Sort the color:-

let arr = [1, 1, 0, 1, 0, 2, 1, 0, 2, 0, 1, 2, 1];

let i = 0,
  j = 0,
  k = arr.length - 1;
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function sortTheColor(arr) {
  while (i <= k) {
    if (arr[i] === 0) swap(arr, i++, j++);
    else if (arr[i] === 2) swap(arr, i, k--);
  }
}
let res = sortTheColor(arr);
console.log(res);
