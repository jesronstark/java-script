let info = {
    "student name": "jesron",
    Rolno: 98989898,
    dsp: 78,
    snm: 88,

    cs: 99,

    total:function(cs){
         return this.cs*5
    }
};

// // let Majortotal = info.dsp + info.snm ;
// // info.Majortotal = Majortotal;



//  console.log(info.total())


let user={
    name : "jesron",
    age : 20
}

for (key in user){
    console.log((key),user[key])
}