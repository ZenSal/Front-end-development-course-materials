
var arr = [16,7,13,52,4,12,87,90];

function divide(left,right){
    var mid = parseInt(left+right)/2;
    //console.log(mid);

}

//divide(0,arr.length-1);



// function DivideArray(array,left, right){
//     // setting pointers to divided array
//     if(left >= right){
//         return;
//     }

//     var mid = (left + right)/2;
//     DivideArray(array, left, mid);
//     DivideArray(array, mid+1, right);
    


// }

// function MergeTheDivide(array, left, right,mid){

//     leftsize = mid - left +1;
//     rightsize = right-mid;

//     let leftArray = new Array(leftsize);
//     let rightArray = new Array(rightsize);

//     for(i=0; i<leftsize; i++){
//         leftArray[i] = array[left+i];
//     }
// }

// DivideArray(arr, 0, arr.length-1);
// console.log(arr[0]);

// * In quick sort, 
// 1. we need to set a element as pivot
// 2. we need to set starting point and ending point
// 3. When the starting point is lesser than pivot increase by one.
// 4. if the ending element is greater than pivot then decrease by one.
// 5. if the ending element is lesser than pivot need to swap with the
//  starting element, or if the starting element is greater than pviot
// need to swap with the ending element


// var arr=[1,2,4,3]
// var count = 0

// function sort(array){
//     for(i=0;i<array.length;i++){
//         for(j=0;j<array.length;j++){
//             count ++;
//             if(array[j]>array[j+1]){
                
//                 temp= array[j];
//                 array[j] = array[j+1]
//                 array[j+1] = temp
                
                
//             }
//         }
//     }console.log(count)


// }

// sort(arr);



function quickSort(array, low, high){
    
    let start = low;
    let end = high;
    // base condition
    if(start>=end){
        return;
    }

    let mid = Math.floor((start+end)/2);
    const pivot = array[mid];

    while(start<end){
        while(array[start]<pivot){
            start++;
        }
        while(array[end]>pivot){
            end--;
        }
        if(start<=end){
            swap(array, start, end);
            start++;
            end--;
        }
    }

    // left array
    quickSort(array, low, end);
    // right array
    quickSort(array, start, high);
}

function swap(array, start, end){
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
}



const array = [4,3,7,11,20,19,13];
quickSort(array, 0, array.length-1);
console.log(array);


