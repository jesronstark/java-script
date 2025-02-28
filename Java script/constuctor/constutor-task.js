function Task(name, dueDate, num1, num2) {
    this.name = name;
    this.dueDate = dueDate;
    this.num1 = num1;
    this.num2 = num2; 

    this.add = function() {
        this.result = this.num1 + this.num2;
        return this.result;
    };
}

const myTask = new Task('my project', '2025-02-25', 23, 10);
console.log(myTask.name);  
console.log(myTask.dueDate);  
console.log(myTask.add());  


///////////////////////////////////////////////////////////////////////
function Add(){
    this.a=33;
    this.b=22;
    this.add=function(c){
        return this.a+this.b+c;
    }
}

let sum = new Add();

console.log(sum.add(10));

let obj1={"name" : "jesron","age" : 20};
console.log(obj1);