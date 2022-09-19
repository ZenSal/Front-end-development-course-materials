

const value =[
    {
    "name":"Magesh",
    "age" : 22,
    "qualification" : "B.E"

    },
    {
    "name":"Manu",
    "age" : 22,
    "qualification" : "B.E"
    },
    {
    "name":"Maju",
    "age" : 22,
    "qualification" : "B.E"
    },
    {
    "name":"Zen",
    "age" : 22,
    "qualification" : "B.E"
    }

 
]

const students =[
    {"name":"zen",
    "age":22
    },
    {"name":"loe",
    "age":22
    },
    {"name":"MAgi",
    "age":22
    },
    
]

const findname = students.find((where)=> where.name.startsWith("l"));
console.log(findname);



// const value2 = {
//     "name" : "Xen",
//     "roll.no" : 25,
//     "qualification" : "Nil"
// }

// const key1 = Object.keys(value);
// const key2 = Object.keys(value2);

// function checkValue(data){
//     if(value[data] === value2[data]){

//     }

// }

// console.log(checkValue(key2));



// function Isequal(obj1, obj2){
//     const data1 = Object.keys(obj1);
//     const data2 = Object.keys(obj2);
//     const checking_equal=function(data){
//         return obj1[data] == obj2[data]

//     }
    
//     return data1.length == data2.length && data1.every(checking_equal);
// }

// console.log(Isequal(value, value2));
//console.log(Isequal(value, value_cpy));

// value2 = Object.keys(value);
// value6 = Object.values(value)
// value4 = Object.keys(value3);
// value8 = Object.values(value3);