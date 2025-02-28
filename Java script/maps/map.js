// to show the value of the index of the array......sub function of the ubject



let map = new Map();
map.set(1,1,"one"),
map.set(2,"two"),
map.set(3,"three"),
map.set(4,"four"),

console.log(map);
console.log(map.get(1));
console.log(map.get(2));    
console.log(map.get(3));
console.log(map.has(1));
console.log(map.delete(1));
console.log(map.keys());
console.log(map.values());  
console.log(map.size);


for ([key,value] of map){
    console.log(key,value);
}

console.log(map.clear());
console.log(map);












































































































































// let arr = [1,2,3,4,5,6,7,8,9,10];
// let map = arr.map((value,index)=>{
//     return value*index;
// })
// console.log(map);