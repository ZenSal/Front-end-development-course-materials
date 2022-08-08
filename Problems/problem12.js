var prices =[100,349,444,323,89,766];

function shares(array){
    let stocks =array[0];
    for(i=1; i<=array.length-1; i++){
        if(array[i]%3==0){
            profit = array[i] - stocks;
            console.log("Inital price :"+ stocks);
            console.log("Selling price :"+ array[i]);
            console.log("The profit for the day is:"  + profit);
        }
    }
}
//shares(prices);

////////////////////////////////////////////////////////////////////////

var prices =[100,499,343,11,334,556,788,989];

function stockmarket(array){
    let overallProfit=0;
    let purchasePrice =0;
    let sellingPrice = 0;
    let changepurchasePrice=true;

    for(let i=0; i<array.length-1; i++){
        sellingPrice=array[i+1];
        //console.log(sellingPrice);
        if(changepurchasePrice){
            purchasePrice = array[i];
            //console.log(purchasePrice);
            //console.log(changepurchasePrice);
        }
        if(sellingPrice>purchasePrice){
            console.log("The inital purchase price is: "+purchasePrice);
            console.log("The selling price is :"+ sellingPrice);
            profit = sellingPrice - purchasePrice
            console.log("The profit made :"+profit);
            if(profit>overallProfit){
                overallProfit = profit;
            }
            changepurchasePrice = false;
        }else{
            console.log("The inital purchase price is: "+purchasePrice);
            console.log("The selling price is :"+ sellingPrice);
            loss = sellingPrice - purchasePrice
            console.log(loss);
            console.log("we're facing loss need to change the pruchase price!!!");
            changepurchasePrice = true;
            continue;
        }
    }
}

stockmarket(prices);
