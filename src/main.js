//TODO: Please write code in this file.
function product(barcode,name,price,unit)
{ 
    this.barcode=barcode;
    this.name=name;
    this.sumPrice=price;
    this.price=price;
    this.num=1;
    this.unit=unit;
    
    this.addNumber=function() {
       this.sumPrice+=this.price;
       this.num++;
    }
}


function printInventory(inputs) {
    var productList=[];
    var barcodeList=[];
    var sum=0;
    var result="***<没钱赚商店>购物清单***\n";
    inputs.forEach(function(element) {
        if(productList[element.barcode])
        {
            productList[element.barcode].addNumber();
        }
        else
        {
            productList[element.barcode]=new product(element.barcode,element.name,element.price,element.unit);
            
            barcodeList.push(element.barcode);  
        }
        sum+=element.price;
    }, this);
    
    
    barcodeList.forEach(function(element) {
        result+="名称："+productList[element].name+"，";
        result+="数量："+productList[element].num+productList[element].unit+"，";
        result+="单价："+productList[element].price.toFixed(2)+"(元)，"
        result+="小计："+productList[element].sumPrice.toFixed(2)+"(元)\n";
    }, this);
        
    result+='----------------------\n总计：'+sum.toFixed(2)+'(元)\n**********************';
    console.log(result);
}