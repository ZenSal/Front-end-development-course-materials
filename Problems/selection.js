var employee_details =[
    {name : "Magesh", salary : 100000},
    {name : "Zen", salary: 5000},
    {name : "John", salary: 520},
    {name : "Kira", salary: 15000}
]




function selectionsort(array){

    for(let i=0; i<array.length-1; i++){
        min = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j].salary < array[min].salary){
                min =j;
            }

        }
        if(min !=i){
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }

       
    } return array

}

var k = 2   
var result = selectionsort(employee_details,k)

console.log(result[result.length-k]["name"])

