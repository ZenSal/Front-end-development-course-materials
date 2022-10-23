function descendingOrder(n){
    let result=[]
    for(let i=1; i<=n; i++){
      result.push(i);
      for(j=0; j<result.length; j++){
        
        if(result[j]>result[j+1]){

            temp = result[j];
            result[j] = result[j+1];
            result[j+1] = temp; 
          
        }

      
      }

      }
      
    return result
  }
  
  console.log(descendingOrder(100))