
 // const MyData = {
//     "name":"Magesh",
//     "Gender": "Male",
//     "age" : 25,
//     "likes" : "coding",
//     "employement":{
//         "company":"csscorp",  //Nested object
//         "dept":"Network engineer",
//         "salary" : 140000ths 
//     }
// }

// console.log(MyData.name);
// console.log(MyData["age"]);
// console.log(MyData.employement.salary);
// console.log(MyData["employement"].company);
// console.log(MyData["employement"]["dept"]);



const my_array = [
    {"fname":"Magesh","lname":"sal"},
    {"age":24,"employee":true}
];

console.log(my_array[0].fname);
console.log(my_array[1].age);

 //// freeze & seal

//  const table = {
//     "name":"Magi"
//  }

//  Object.seal(table); 
//  //delete table.name 
//  table.name = "magiiii";
//  table.address = "chennai";
//  console.log(table); 
// // object.freeze -> can't add or delete or update.
// // object.seal -> can update but unable to delete or add..

// // to find whether the object is sealed or frozed 
// console.log(Object.isSealed(table));
// console.log(Object.isFrozen(table));

