// Task : 1
// Installation Complete

// Task : 2
// personal message: store a person's Name in a variable, and print a message to that person.
// your message should be simple, such as,"Hello Eric, would you like to learn some python today?"

 let personName:string = "Eric";
 console.log(`Hello ${ personName},would you like to learn some python today?`);

// Task : 3

// Name case: store a person's name in a variable, and then print that person's in lowercase,uppercase,titlecase.
let perName: string = "Arjumand Rukhsar";

// in lowercase
console.log("lowercase:", perName.toLowerCase());

// in uppercase
console.log("uppercase:", perName.toUpperCase());

// title case
console.log("titlecase:", perName.replace(/\b\w/g,c=> c.toUpperCase()));

// Task : 4
// Albert Einstein once said "A person who never made a mistake never tried anything new."

 let quote: string = "A person who never made a mistake never tried anything new.";
 let author: string = "Albert Einstein";
 console.log(`${author} once said, "${quote}"`);

// Task : 5
// famous quote 2:reapt exercise 4,but this time store the famous person's name in a variable called famous person.
// the compose your message and store it in a new variable called message. print your message.

 let famous_person: string = "Albert Einstein";
 let message: string = `${famous_person}, once said "${quote}"`;
 console.log(message);

// Task : 6

// stripping Name:store a person's name,and include some whitespace characters at the
// begginning and end of the name.make sure you use each character combination,"\t" and "\n",
// at the least once. print the name once,so the whitespace around the name is displayed.
// then print the name after stripping the white space.

let preName : string ="\t\n Muskan Ali \n\t";
console.log("Original:", preName);
console.log("Stripped:", preName.trim());

// Task : 7 & 8
// Number Eight:write addition, subtraction, multiplication and division operations that each result
// in the number 8.Be sure to enclose your operation in print statements to see the results.

console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

 // Task : 9
 // Favourite Number:store your favourite number in a variable.Then using that variable.create amessage that reveals 
// your favourite number.print that MessageChannel.

let favouriteNumber: number = 7;
 console.log (`My favourite number is ${ favouriteNumber}.`);


 // Task : 10
// Adding comments:choose two programs you've written and add at least one comment to each.

// author: {Muskan Ali}
// date: {Tuesday , Feburary 20 , 2024}

// Task 9: printing my favourite number.

let favouritNumber: number = 7;
// reveling my favourite number in a message.
console.log (`My favourite number is ${favouritNumber}.`);


// Task : 11

// Name:store the numbers of a few of your friends in a array called names.print each person's name by accessing each
// element in the list one at a time.

let names : string [] = ["Ali","Haseeb","Wajahat","Muzamil"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Task : 12

// Greeting:start with the array you used in Exercise 11,but instead of just printing each person's name
// print amessage to them.the text of each message should be the same,but each message should be personalized with the
// person's name.

// let names : string [] =  ["Ali","Haseeb","Wajahat","Muzamil"]; 
let mesage : string = "Do you like to play football?";
console.log(names[0] + " "+ mesage )
console.log(names[1] + " "+ mesage )
console.log(names[2] + " "+ mesage )
console.log(names[3] + " "+ mesage )

// Task : 13

// your own Array:Think of your favourite mode of transportation,such as amotorcycle or a car,and make a list that stores 
// several examples.use your list to print a series of statements about these items,such as "I would like to own a Honda".

let transportation : string [] = ["Honda Motorcycle","Audi","carola","Honda city"];
transportation.map((items) => console.log(`I would like to own a ${items}`));

// Task : 14
// Guest list:if you could invite anyone,living or deceased,to dinner,who would you invite?Make a list that include at 
// least three people you'd like to invite to dinner.

let guesstArr: string [] = ["Ali","Haseeb","Wajahat"];
 guesstArr.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)));

// Task : 15

 let guestArr : string[] = ["Muskan", "Ali","Haseeb","Wajahat"];
let canNotAttend : string = "Muskan"
console.log(canNotAttend  +  "  " + "can not attend the dinner.")

 let newGuest : string ="Alishba"
 guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

 console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited to the dinner.`))

// Task : 16

let guesttArr : string[] = ["Alishba", "Haseeb", "Ali", "Humza"];

let cannotAttend : string = "Haseeb"
let newGuesst : string = "wajahat"

guesttArr[guesttArr.indexOf(cannotAttend)] = newGuesst;
console.log(guesttArr)

guesttArr.map((items) =>
console.log(`Dear ${items}, I found a bigger dinner table so I am invited more pople.`));

// Task : 16(part 2)

let guestBeg : string = "Moiz"
guesttArr.unshift(guestBeg);
console.log(guesttArr)

// Task : 16(part 3)

let middleGuest : string = "Fatima"
let middleIndex = guesttArr.length/3
guesttArr.splice(middleIndex,0,middleGuest)
 console.log(guesttArr)

 // Task : 16(part 4)

 guesttArr.push("Zeeshan")
 console.log(guesttArr)

// Task : 16(part 5)

 guesttArr.map((items) =>
console.log (`Dear ${items}, you are invited in the more people list on dinner.`));

// Task : 17
// Initial list of guests

  let guests: string[] = ["Ali", "Bilal",];

// Informing that only two people can be invited

  console.log("Due to limited space,only two people can be invited for dinner.") 

// Removing guest untill only two names remain

  while (guests.length > 2) {
     const removeGuest = guests.pop();
  console.log(`sorry, ${removeGuest}, you're no longer invited to dinner.`);}

// printing invitations to the remaining two guests

 guests.forEach((guest) => {
     console.log(`Dear ${guest},you're still invited to dinner.`)});

 // Removing the last two name from the list

  guests.pop();
  guests.pop();
  console.log("Final guest list:", guests);

// Task : 18
// store the location in an array

let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];
console.log("Original order:", placesToVisit);

// print the array in alphabetical order whitout modifying the actual list

console.log("Alphabetical order:", [...placesToVisit].sort());

// show that the array is still in its original order

console.log("Original order after sorting:", placesToVisit);

// print the array in reverse alphabetical order without changing the order of the original list

console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// show that the array is still original order

console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list

placesToVisit.reverse();
console.log("Reverse order:", placesToVisit);

// Reverse the order of the list again to get back to the original order

placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// sort the array in alphabetical order

placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

//sort the array in reverse alphabetical order

placesToVisit.sort((a,b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit); 

// Task : 19

let invitations : string[] = ["ali", "bilal"]
let count_invitations : number = invitations.length
console.log(`${count_invitations} people will come to the dinner.`);


// Task : 20

// Think of something you could store in a array.for example,you could make a list 
// of mountains, rivers, countries, cities, languages, or anything else you'd like.
// write a program that create a list containing these items.

let country: string[] = ["Pakistan", "India", "NewYork", "China", "Korea"];
console.log("List of country:");
console.log(country);

Task : 21
// Think of something you could store in a typescript object.write a program that creates
// objects containing these items.


let person: {name: string, fname: string, age: number} = {name: "Muskan", fname: "female", age: 27}
console.log(person)


// Task : 22
// International Error: If you haven't received an array index error in one of your
// programs yet,try to make one happen.change an index in one of your programs
// produce an index error. Make sure you correct the error before closing the prpgrams.

const days: string [] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(days{7})
console.log(days[6])


// Task : 23

let car ="subaru";

 console.log("is car == 'subaru'? predict true")
 console.log(car == 'subaru')

 console.log("is car != 'honda city'? predict true")
 console.log(car != 'honda')

console.log("is car == 'subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car == 'SUBARU'? predict false")
console.log(car =='SUBARU')

console.log("is car.lenght == 6? predict true")
console.log(car.length ==6)


console.log("is car.lenght != 10? predict true")
console.log(car.length !=10)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)


console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)

console.log("is 72 >= 83 ? predict false")
console.log(72 >= 83)

console.log("is car == 'subaru' && car.lenght == 6? predict true")
console.log(car == 'subaru' && car.length == 6)

// Task : 24
// Test for equality and inequality with strings


let name_1 : string = "Muskan"
let name_2 : string = "Muskan Ali"
let name_3 : string = "Miss Muskan Ali"

if (name_1 == name_3){
    console.log("names are equal")
}else{
    console.log("names are not equal")
}
if(name_1 != name_2){
    console.log("names are equal")
}

if(name_1 != name_3){
        console.log("names are equal")
 }

 let age_1 : number = 18
 let age_2 : number = 22

if (age_1 == 18) {
    console.log("eligibal for vote")
}

if (age_1 != 22){
    console.log("eligible for vote in older category")
}

if(age_1 <= age_2){ //less
    console.log("younger")
}

if(age_2 >= age_1){ //greater
    console.log("older")
}

if(age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}

if(age_1 == 18 || age_2 == 22){
    console.log("person is eligible not for vote")
}

let country : string [] = ["Pakistan", "China", "Japan","India"]
if (country.includes("Pakistan")){
    console.log("pakistan is in country list")
}

if (!country.includes("america")){
   console.log("america is not includes in an array")
}

// Task : 25

let alien_color : string = "green"

if (alien_color == "green")
console.log("you earn 5 points")

let alien_color : string = "red"
if(alien_color == "green")
console.log("no output")

// Task : 26

let alien_color : string = "green"
if (alien_color == "green") {
console.log("player just earned 5 point for shooting the alien")
}else{
    console.log("player just earn 10 point")
}

let alien_color : string = "red"
if (alien_color == "green") {
console.log("player just earned 5 point for shooting the alien")
}else{
    console.log("player just earn 10 point")
}

// Task : 27

let alien_color : string = "red"
if (alien_color == "green"){
    console.log("5 points")
}else if (alien_color == "yellow" ){
   console.log("10 points")
}else {
    console.log("15 points")
}

// Task : 28 ...................2,4 13,20 65,older

let age: number = 54
if (age < 2){
    console.log("you are a baby")
}else if (age < 4){
    console.log("you are a toddler")
}else if (age < 13){
    console.log("you are a kid")
}else if(age < 20){
    console.log("you are a teenager")
}else if(age < 65){
    console.log("you are a adult")
}else {
    console.log("you are older")
}

// // Task : 29  

let favourite_fruit : string [] = ["Kivi","Apple","Orange","peach","berry"]

if (favourite_fruit.includes("Kivi")){
    console.log("Kivi")
}
if (favourite_fruit.includes("Apple")){
    console.log("Apple")
}
if (favourite_fruit.includes("Orange")){
    console.log("Orange")
}
if (favourite_fruit.includes("peach")){
    console.log("you really like banana")
}
if (favourite_fruit.includes("berry")){
    console.log("you really like banana")
}

// Task : 30

let users : string [] = ["admin","eric","hasseeb","ali","fatima"]

for (let user of users ){
    if (user === "admin"){
        console.log("Hello admin,would you like to see a status report?")
    } else{
        console.log (`Hello ${user}, thank you for logging in again`)
    }
}

// Task : 31

 let users : string [] = ["eric","haseeb","ali","fatima","admin"]
if (users.length === 0){
    console.log("We need to find some users!")
} else{
    for (let user of users){
        if ( user === "admin"){
            console.log("Hello admin,would you like to see a status report?")
        }else{
            console.log(`Hello ${user},thank you for logging in again`)
        }
    }
}

users = []
if (users.length === 0){
    console.log("We need to find some users!")
}

// Task : 32

let current_users : string[] = ["admin","Eric","Ali","Hamza","fatima"]
let new_users : string[] = ["admin","fatima","Aliza","Haseeb","Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
    if (current_users_lower.includes (new_user.toLowerCase())){
      console.log(`Sorry ${new_user},that name is taken`)
    }else{
     console.log(`Yes ${new_user},is still in availabe list`)
    }
}

// Task : 33

let numbers : number [] = [1,2,3,4,5,6,7,8,9]
for (let number of numbers){
if (number === 1) {
    console.log (`${number}st`) 
} else if (number === 2){
    console.log (`${number}nd`)
} else if (number === 3){
    console.log (`${number}rd`)  
} else {
    console.log(`${number}th`)  
}
}

// Task : 34

let favourite_pizza : string [] = ["pepperoni","chicken","fajita","veg"]
for (let pizza of favourite_pizza){
    console.log(pizza)
}
console.log("\n")

for (let pizza of favourite_pizza){
    console.log( `I really like ${pizza} pizza`)
}
console.log("\nI really love pizza")

// Task :35
let animals : string [] = ["cat","lion","dog"]

for (let animal of animals){
     console.log(animal)
}
console.log("\n") 

for (let animal of animals){
    console.log(` A ${animal} has a tail`)
}
console.log("\n all of these are great pets! but i love cats more")

// Task : 36

function makeShirt(size: string, text: string): void{
    console.log (`you order a ${size} shirt that says ${text}`)
}

makeShirt(`large`,`"i love typescript"`)
makeShirt(`medium`,`"i need a big shirt"`)

//  Task : 37

function makeShirt(size: string = 'large', text: string = ` I love typescript`): void {
    console.log(`you have  order  a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt(`medium`)

different message
makeShirt(`small`, 'I need a big shirt to wear')

//  Task : 38

function describe_city(city: string, country: string = 'Pakistan'): void{
    console.log(`${city} is in ${country}`)
}

describe_city('Karachi')
describe_city('France', 'Europe')
describe_city('Lahore', ' punjab')

//  Task : 39

function cityCountry(city: string, country: string): string {
    return  `${city}, ${country}`
}
let c1 = cityCountry('lahore','pakistan')
let c2 = cityCountry('tokyo','japan')
let c3 = cityCountry('paris','france')

console.log(c1)
console.log(c2)
console.log(c3)

//  Task : 40

function makeAlbum (artist: string, title: string): {artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("ali","light")
console.log(album)

 album = makeAlbum("bilal","red wave")
console.log(album)

 album = makeAlbum("hamza","seenbreez")
console.log(album)

//  Task : 41

function show_magicians(magicians: string[]): void {
    for (const magician of magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["ali","bilal","hamza"]
show_magicians(magician)

//  Task : 42

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++){          
        magicians[i] = magicians[i]    +     ' the great '
    }
   }   
   const magician2: string[] =  ["ali","bilal","hamza"];
   make_great(magician2)
   show_magicians(magician2)

//    Task : 43

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
return greatMagicians;
}
const magicians3: string[] = ["ali","bilal","hamza"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

// Task : 44

function sandwich(...items: string[]): void {
    console.log("Sandwich order:")

    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich muskan Ali")

sandwich('capsicum' , 'tomato' , 'chicken')
sandwich('bef' , 'chees')
sandwich('garlic chicken' , 'mayo sauce')

//  Task : 45

type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
}

const mycar: car = createCar("toyota", "corola", { color: "silver", year: "2024"})
console.log(mycar)



























































































































































































































































































































































































