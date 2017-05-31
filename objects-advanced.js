function calculateSalesTax(salesData, taxRates) {

  var output = {};
  //for each company in salesData
  for (var entry in salesData) {
    var companyName = salesData[entry].name;
    var province = salesData[entry].province;
    var sumSales = sumArray(salesData[entry].sales);


    if (output[companyName]) {
      output[companyName].totalSales += sumSales;
      output[companyName].totalTaxes += sumSales * taxRates[province];
    } else {
      output[companyName] = {
        totalSales : sumSales,
        totalTaxes : sumSales * taxRates[province]
      }
    }

  }

  return output;
}

function sumArray(myArray) {
  var sum = 0;
  for (var i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  } return sum;
}


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);


/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/