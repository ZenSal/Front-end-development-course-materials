
// bubble sort
var num =[2,3,5,6,4,1]

function ascending_order(array){

    for(let i = 0; i<array.length-1; i++){
        if(array[i]>=array[i+1]){
            array[i]=array[i+1]
            
        }

}console.log(array);
}

//ascending_order(num)

var values =[5,4,3,2,1,6,2];

 
function FindLargest(array){
    let result = [];
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1; i++){
            if(array[j]<array[j+1]){
                result = array[j+1]
                array[j+1] = array[j];
                array[j] = result;
            }
        }console.log(result);

    }
    
}

//FindLargest(values);

var countries =["india","austria","china","russia","brazil"]

function sortcon(array){
    for(let i=0; i<array.length; i++){
        var isSwapped=false;

        for(let j=0; j<array.length-1-i; j++){
            if(array[j].localeCompare(array[j+1])!= -1){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                var isSwapped=true;
            }
        }if(!isSwapped) break;
    } return array
}

//console.log(sortcon(countries));

function bubbleDes(n){
    for(let i=0; i<n; i++){
        var temp = n.toString();
        if(temp!=0){
            
        }
    }return temp;
    

}

//console.log(bubbleDes(100));

var numbers = [100,69,84,32,1,6,59]

function select(array){
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp
            }
        }
        
        
    }return array;
}

//console.log(select(numbers));



var arr =[23,4,3,232,14,5]

function bubblesort(array){

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j]>array[j+1]){
                isswap=true;
                temp = array[j];
                array[j]=array[j+1];
                array[j+1]=temp
            }
        }isswap=false;
    }return array
}


//console.log(bubblesort(arr));


var arr2 = [23,4,3,232,14,5]

function selectionsort(array){
    for(let i=0; i<array.length-1; i++){
        minValue=i;

        for(let j=i+1; j<array.length; j++){
            if(array[j]<array[minValue]){
                minValue=j;
            }
            
        }if(minValue!=i){
            temp = array[i];
            array[i] = array[minValue];
            array[minValue] = temp;
        }
        
    }
    return array
}

//console.log(selectionsort(arr2))




var array=["Australia","India","China","Russia","Japan"]


function countrysort(inputArray){

    for(let i=0; i<inputArray.length-1; i++){
        min = i;
        for(let j=i+1; j<inputArray.length; i++){
            if(inputArray[j]>(inputArray[min])){
                min =j
            }
        }if(min!=i){
            temp = inputArray[min];
            inputArray[min] = inputArray[i];
            inputArray[i] = temp
        }
        
    }return inputArray
}

//console.log(countrysort(array))




var employee_details =[
    {name : "Magesh", salary : 10},
    {name : "Zen", salary: 5000},
    {name : "John", salary: 520},
    {name : "Kira", salary: 15000}
]

function selectionsort(array){

    for(let i=0; i<array.length-1; i++){
        min = i;
        for(let j=i+1; j<array.length; i++){
            if(array[j].salary > array[min].salary){
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
//console.log(selectionsort(employee_details))


 var value = [3,6,11,15,19,25,30]
 var num =12;

 function insertElement(array){
    for(let i=0; i<=array.length; i++){
        if(array[i]>num){
           
            temp = array[i];
            array[i] = num;
            num = temp
        }
    }return array
 }

 //console.log(insertElement(value));


 var arr = [9,33,43,2,1,444]

 function InsertionSort(array){

    for(let i=1; i<array.length; i++){

        for(let j=i; j>0; j--){

            if(array[j]<array[j-1]){
                isSwap =true;

                temp = array[j];
                array[j] = array[j-1];
                array[j-1] = temp;
            }else{
                break;
            }
        }
    } return array
 }

 //console.log(InsertionSort(arr));



 var fruits = ["Banana","apple","orange","lemon"];

 function Fruitee(array){

    for(let i=0; i<array.length; i++){
        if(array[i].localeCompare(array[i+1]) != -1){
            temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp
        }
    }return array

 }
 

 //console.log(Fruitee(fruits));


 var A =[11,12,25,26,38]
 var B = [2,23,17,20,45]
 

 function merge(array1, array2){
    let C=[]
    let i = 0
    let j = 0;
    let k= 0;
    
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            C[k] = array1[i]
            i++;
            k++;
        }else{
            C[k] = array2[j];
            j++;
            k++;
    }

    if(i==array1.length){
        C.push(array1[i])
    }
    if(j==array2.length){
        C.push(array1[j])
    }
   
    for(m=0; m<C.length; m++){
        for(n=0; n<C.length; n++){
            if(C[n]>C[n+1]){
                temp = C[n+1];
                C[n+1]=C[n];
                C[n]=temp;
            }
        }
    }   


    
    } return C;



 }

 console.log(merge(A,B));



 
function mergesort(array,left,mid,right){



}

function Premerge(array,left, right){
    // Stop recursion 
    if(left>=right){
        return
    }
    // to find left array
    let mid = (left + right)/2
    // To divide the left array
    Premerge(array, left, mid);
    //to divide the right array
    Premerge(array, mid+1, right)
    //
    mergesort(array,left,mid,right)
}

var arr = [10,7,8,23,6,44]

Premerge(arr,0,arr.length-1)




var A =[11,12,25,26,38]
var B = [2,23,17,20,45]
 
function median(array1, array2){
    let C=[]
    let i = 0
    let j = 0;
    let k= 0;
    
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            C[k] = array1[i]
            i++;
            k++;
        }else{
            C[k] = array2[j];
            j++;
            k++;
    }
   
    for(m=0; m<C.length; m++){
        for(n=0; n<C.length; n++){
            if(array[n]<array[n+1]){
                temp = array[n];
                array[n]=array[n+1];
                array[n+1]=temp;
            }
        }
    }


    
    } return C;


 }

 //console.log(merge(A,B));















