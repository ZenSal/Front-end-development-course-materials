
const showroom =[

    { name : "RollsRoyce", Price : "$1000,000"},
    { name : "Mercedes benz", Price : "$200,000"},
    { name : "Lambogrini", Price : "$500,000"},
    { name : "Aston matrin", Price : "$400,000"}
    
]
//console.log(showroom);


const JsonShowroom = JSON.stringify(showroom);
//console.log(JsonShowroom);


const names = ["magi","Zen","Leo","chris","char"]

const names2=[];

for(i=0;i<names.length; i=i+2){
    var result=[names[i]];
    if(names[i+1]){
        result.push(names[i+1]);
    }
    names2.push(result);
}
console.log(names2);
