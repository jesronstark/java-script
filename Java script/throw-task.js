function checkage(age) {
    try {
        if (age > 18) {
            throw new Error ("you must be be 18 or older than 18");
        }
        console.log("access granted");
    }
    catch (error) {
    
        console.log("caguht error:",error.message);
    }
}

checkage(20);
checkage(14);
  




