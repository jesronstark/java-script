








let studentData1 = [["Jack", 24], ["Sara", 23]];
studentData1[1][2] = "hello";
console.log(studentData1);

 
let studentData2 = [["Jack", 24], ["Sara", 23]];
studentData2[1].push("pass");
console.log(studentData2);

 
let studentData3 = [["Jack", 24], ["Sara", 23]];
studentData3 = [studentData3.splice[1], ["Peter", 24]];
console.log(studentData3);
 
let studentData4 = [["Jack", 24], ["Sara", 23, "hello", "pass"], ["Peter", 24]];
delete studentData4[1][2];
delete studentData4[1][3];
console.log(studentData4);

 
let studentData5 = [["Jack", 24], ["Sara", 23], ["Peter", 24]];
studentData5 = studentData5.slice(0, 1);
console.log(studentData5);

 
let studentData6 = [["Jack", 24], ["Sara", 23]];
studentData6[0] = studentData6[0].slice(0, -1);
console.log(studentData6);
