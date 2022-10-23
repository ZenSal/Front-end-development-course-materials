

// function select(arr, k){

//     partion(arr, 0, arr.length-1,k)
    

// }

// function partion(array, first, last, k){

//     let left = first;
//     let right = last;

//     let mid = Math.floor((left+right)/2);
//     const pivot = array[mid];

//     if(left>=right){
//         console.log("kth element is: "+arr[mid]);
//         return;
//     }

    

//     while(left<right){

//         while(array[left]<pivot){
//             left++;
//         }
//         while(array[right]>pivot){
//             right --;
//         }

//         if(left<=right){

//             temp = array[left];
//             array[left] = array[right];
//             array[right] = temp;

//             left ++;
//             right --;
//         }
//     }

    
//     if(pivot==k-1){
//         console.log("Kth element is found "+ array[pivot]);
//         return
//     }
//     else if(pivot>k-1){

//         partion(array, left, last,k);

//     }else{
//         partion(array, first, right,k);
//     }  
  

// }


// const arr = [4,3,7,11,20,19,13]
// select(arr,3)

function quickSelect(arr, k){

    partition(arr, 0, arr.length-1, k);
}

function partition(array, low, high, k){

    let start = low;
    let end = high;

    let mid = Math.floor((start+end)/2);
    const pivot = array[mid];
    if(start>=end){
        console.log("kth element is: "+arr[mid]);
        return;
    }
    while(start<end){
        // move start index
        while(array[start]<pivot){
            start++;
        }
        // move end index
        while(array[end]>pivot){
            end--;
        }
        if(start<=end){
            swap(array, start, end);
            start++;
            end--;
        }
    }
    mid = array.indexOf(pivot);
    if(mid==k-1){
        console.log("kth element is: "+arr[mid]);
        return mid;
    }
        // check if pivot is k
        if(mid>k-1){
            partition(array, low, end, k);
        }else{
            partition(array, start, high, k);
        }
}

function swap(array, start, end){
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
}


const arr = [15, 13, 0, 17, 9, 12, 4];
const result = quickSelect(arr, 3);