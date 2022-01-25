//Stores my name in a variable and prints it
var myName = "Andrew";
console.log(myName);

//Stores the number of States in the United States and prints it
const numberOfStatesInUS = 50;
console.log(numberOfStatesInUS);

//Stores the result of adding five and four and prints it
var fivePlusFour = 5 + 4;
console.log(fivePlusFour);

function SayHello(){
    alert("Hello Javascript!");
}

SayHello();

function CheckAge(name, age){
    if(age < 21)
    {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

CheckAge("Charles", 21);
CheckAge("Abby", 21);
CheckAge("James", 18);
CheckAge("John", 17);

var Vegetables = ["Spinach", "Cauliflower", "Tomato", "Zucchini", "Carrot"];
for(let i = 0; i < Vegetables.length; i++)
{
    console.log(Vegetables[i]);
}

var pet = {
    name: "Dos",
    breed: "Tuxedo-Mixed"
};

console.log(pet.name);
console.log(pet.breed);

let people = [
    {name: "Jon",
    age: 37},
    {name: "Katie",
    age: 23},
    {name: "Elijah",
    age: 18},
    {name: "Lisa",
    age: 26},
    {name: "Mark",
    age: 16}
];

for(let i = 0; i < people.length; i++)
{
    CheckAge(people[i].name, people[i].age);
}

function getLength(word)
{
    return word.length;
}

let l = getLength("Hello World");

//Determine if the length number is even or odd
if((l % 2) == 0)
{
    console.log("The world is nice and even!");
}
else
{
    console.log("The world is an odd place!")
}