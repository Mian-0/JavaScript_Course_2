// ----------------------------------------===-------------Start Of First Video------------------------------------------------------

// // This is my First JavaScript code
// console.log('Hello World')

// ---------------------------------------------------------End Of Section_1---------------------------------------------------------

// ------------------------------------------------------------Variables-------------------------------------------------------------

// let name = 'Muhammad';
// console.log(name);
// // Cannot be a researved keyword.
// // Should be meaingful.
// // Cannot start with a number (1name).
// // Cannot contain a space or hyphen(-)
// // Are case-sensitive

// // -----------------Wrong---------------------
// let firstName = 'Muhammad', lastName = 'Akmal';

// // -----------------Right---------------------
// let firstName = 'Muhammad';
// let lastName = 'Akmal';

// ---------------------------------------------------------End Of Section_2---------------------------------------------------------

// ------------------------------------------------------------Constants-------------------------------------------------------------

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate)

// ---------------------------------------------------------End Of Section_3---------------------------------------------------------

// ---------------------------------------------------------Primitive Types----------------------------------------------------------

// let name = 'Muhammad'; // String Literal
// let age = 30; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName = undefined; // Undefined
// let selectedColor = null; // Null

// ---------------------------------------------------------End Of Section_4---------------------------------------------------------

// ---------------------------------------------------------Dynamic Typing-----------------------------------------------------------

// let name = 'Muhammad'; // String Literal
// let age = 30; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName = undefined; // Undefined
// let selectedColor = null; // Null

// console.log(typeof(name));
// console.log(typeof(age));
// console.log(typeof(isApproved));
// console.log(typeof(firstName));
// console.log(typeof(selectedColor));

// ---------------------------------------------------------End Of Section_5---------------------------------------------------------

// ------------------------------------------------------------Objects---------------------------------------------------------------

// let person = {
//     name: 'Muhammad',
//     age: 13.7
// };

// // Dot Notation (Recomended)
// person.name = 'Bin';

// // Bracket Notation
// person['name'] = 'Akmal';

// console.log(person.name);


// ---------------------------------------------------------End Of Section_6---------------------------------------------------------

// -------------------------------------------------------------Arrays---------------------------------------------------------------

// let selectedColor = ['red', 'blue'];
// selectedColor[2] = 1;
// console.log(selectedColor.length );


// ---------------------------------------------------------End Of Section_7---------------------------------------------------------

// ------------------------------------------------------------Functions-------------------------------------------------------------

// function greet(name, middleName, lastName) {
//     console.log('Hello! ' + name + ' ' + middleName + ' ' + lastName);
// }
// greet('Muhammad', 'bin', 'akmal');

// ---------------------------------------------------------End Of Section_8---------------------------------------------------------

// ---------------------------------------------------------Types of Functions-------------------------------------------------------

// // Performing a task
// function greet(name, middleName, lastName) {
//     console.log('Hello! ' + name + ' ' + middleName + ' ' + lastName);
// }
// greet('Muhammad', 'bin', 'akmal');

// // Calculating a value

// function square(number) {
//     console.log(number*number);
// }
// square(2);

// ---------------------------------------------------------End Of First Video--------------------------------------------------------
// 🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈❗❗❗❗❗❗❗❗❗❗🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈
// -----------------------------------------------------Start Of Second Video_Strings-------------------------------------------------

// // String primitive
// const message = ' This is my first message ';
// console.log(typeof(message));

// console.log('---------Lenght---------');
// console.log(message.length);

// // --------------------------------------------
// console.log('---------Index----------');
// // --------------------------------------------

// console.log(message[0]);
// console.log(message[1]);

// // --------------------------------------------
// console.log('-----Include or not-----');
// // --------------------------------------------

// console.log(message.includes('my'));
// console.log(message.includes('not'));

// // --------------------------------------------
// console.log('---Starting Character---');
// // --------------------------------------------

// console.log(message.startsWith('This'));
// console.log(message.startsWith('this'));

// // --------------------------------------------
// console.log('--------IndexOf--------');
// // --------------------------------------------

// console.log(message.indexOf('my'));

// // --------------------------------------------
// console.log('--------Replace--------');
// // --------------------------------------------

// console.log(message.replace('first', 'second'));
// console.log(message);

// // --------------------------------------------
// console.log('-------UpperCase-------');
// // --------------------------------------------

// console.log(message.toUpperCase());

// // --------------------------------------------
// console.log('---Cutting WhiteSpace--');
// // --------------------------------------------

// console.log(message.trimLeft());
// console.log(message.trim());



// // --------------------------------------------
// console.log('------------------------');
// // --------------------------------------------

// // String object
// const another = new String('hi');
// console.log(typeof(another));

// ---------------------------------------------------------End Of Second Video-------------------------------------------------------
// 🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈❗❗❗❗❗❗❗❗❗❗🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈
// -----------------------------------------------------Start Of Third Video_If_Else--------------------------------------------------

// Hour 
// If hour is between 6am and 12pm: Good morning!
// If hour is between 12am and 6pm: Good afternoon!
// Otherwise: Good evening!

// let hour = 20
// if (hour >= 6 && hour < 12) 
//     console.log('Good morning!')
// else if (hour >= 12 && hour < 18) 
//     console.log('Good afternoon!')
// else
//     console.log('Good evening!')

// ---------------------------------------------------------End Of Third Video--------------------------------------------------------
// 🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈❗❗❗❗❗❗❗❗❗❗🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈
// -----------------------------------------------------Start Of Fourth Video_Scope---------------------------------------------------

// const color = 'red';

// function start() {
//     const message = 'hi';
//     const color = 'blue';
//     console.log(color);
// }

// function stop() {
//     const message = 'bye';
// }

// start();

// ---------------------------------------------------------End Of Fourth Video--------------------------------------------------------
// 🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈❗❗❗❗❗❗❗❗❗❗🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈🏳‍🌈