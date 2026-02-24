





















let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);

console.log(set);
console.log(Array.from(set)[1]);
console.log(set.has(2));
console.log(set.delete(3));
console.log(set.size);

for (let value of set) {
    console.log(value);
}


