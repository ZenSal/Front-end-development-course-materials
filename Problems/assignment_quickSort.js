

function Quick_sort(array,first,last){

    let start = first;
    let end = last;

        
        
        //divide the array to find the mid element
    let mid = Math.floor((start+end)/2);
    const pivot = array[mid];

        //base condition
    if(start>=end){
        return;
    }

    while(start<end){
        while(array[start]<pivot){
            start ++;
        }
        while(array[end]>pivot){
            end --;
        }

        if(start<=end){
            swap(array,start,end);
            start++;
            end--;
        }   

            

    

        }

        Quick_sort(array, first, end);
        Quick_sort(array, start, last)
    }


function swap(array,start,end){

    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
}



// const arr = [15,13,2,17,,9,12,0,4]
// Quick_sort(arr, 0, arr.length-1);
// console.log(arr);







