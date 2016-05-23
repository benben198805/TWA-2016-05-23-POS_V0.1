//TODO: Please write code in this file.
function printInventory(inputs) {
    var productList=[];
    var sum=0;
    var result="***<没钱赚商店>购物清单***\n";
    inputs.forEach(function(
        element) {
        if(productList[element.barcode])
        {
            productList[element.barcode].num++;
            productList[element.barcode].sumPrice+=productList[element.barcode].price;
        }
        else
        {
            productList[element.barcode]={
                barcode:element.barcode,
                name:element.name,
                sumPrice:element.price,
                price:element.price,
                num:1,
                unit:element.unit
            };
        }
        sum+=element.price;
    }, this);
    
    for (var key in productList) {
        result+="名称："+productList[key].name+"，";
        result+="数量："+productList[key].num+productList[key].unit+"，";
        result+="单价："+productList[key].price.toFixed(2)+"(元)，"
        result+="小计："+productList[key].sumPrice.toFixed(2)+"(元)\n";
    }
            
    result+='----------------------\n总计：'+sum.toFixed(2)+'(元)\n**********************';
    console.log(result);
}