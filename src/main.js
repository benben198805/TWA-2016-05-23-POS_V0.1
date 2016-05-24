//TODO: Please write code in this file.
function printInventory(inputs) {
    var bill = billingCart(inputs);
    var outputString = formatOutput(bill);

    console.log(outputString);
}

function billingCart(inputs) {
    var bill = new Map();
    inputs.forEach(function (
        element) {
        if (bill.has(element.barcode)) {
            bill.get(element.barcode).count++;
            bill.get(element.barcode).sumPrice += bill.get(element.barcode).price;
            bill.get(element.barcode).sumPriceFormat = bill.get(element.barcode).sumPrice.toFixed(2);
        }
        else {
             var newGood= {
                name: element.name,
                sumPrice: element.price,
                price: element.price,
                count: 1,
                unit: element.unit,
                sumPriceFormat: element.price.toFixed(2),
                priceFormat: element.price.toFixed(2)
            };
            bill.set(element.barcode,newGood);
        }
    });
    return bill;
}
function formatOutput(bill) {
    var subTotal = 0;
    var result = "***<没钱赚商店>购物清单***\n";
    for (var [key,value] of bill) {
        result += "名称：" + value.name + "，";
        result += "数量：" + value.count + value.unit + "，";
        result += "单价：" + value.priceFormat + "(元)，"
        result += "小计：" + value.sumPriceFormat + "(元)\n";

        subTotal += value.count * value.price;
    }

    result += "----------------------\n总计：";
    result += subTotal.toFixed(2);
    result += "(元)\n**********************";
    return result;
}