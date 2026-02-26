













// function person(){
//     this.name = "jesron";
//     this.age = function(){
//         return 20;
//     }
// }
// let obj = new person();
// console.log(obj.age());

// //////////////////////////////////////////////////////////

// function Person( ){
//     this.name = "jesron";
//     this.age = 23;

//     this.greet = function(){
//         console.log("hello");
//     }   
// }

// let obj1 = new Person();
// let obj2 = new Person();

// obj1.greet();


function Person( person_Name , person_Age, person_gender){
    this.name = person_Name;
    this.age = person_Age;
    this.gender = person_gender;

    this.greet = function(){
        console.log(`hi${this.name}`);
    }
}

let obj1 = new Person("jesron",23,"male");
let obj2 = new Person("james",23,"male");

obj1.greet();

console.log(obj1.name);
console.log(obj2.gender);
