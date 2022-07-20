
let shedA=510;
let shedB=308;
let shedC=486;
let shedD=572;
 let week=7;   
let totalDaily= shedA + shedB + shedC + shedD;

function totalWeeklyProduction(totalDaily, week){

    
    let result = totalDaily * week;
    return result;
    
    }
    
let result = totalWeeklyProduction(totalDaily, week)
console.log(totalDaily)
console.log(result);


let selling_price = 45;
function incomeOverTime() {
    
    let totalWeeklyIncome= [ { name: "Your weekly income will be", weeklyIncome: selling_price * 7 * totalDaily}]
totalWeeklyIncome.forEach((inc)=>console.log(inc.name + " "+ inc.weeklyIncome));


let totalYearlyIncome= [ { name: "Your yearly income will be", yearlyIncome: selling_price * 365 * totalDaily}]
totalYearlyIncome.forEach((inc)=>console.log(inc.name + " "+ inc.yearlyIncome));
    
}

incomeOverTime()


function leapYearReport() {
let start = ("Your income for")
let byMonth= [ { name: "January", income: selling_price * 31 * totalDaily}, { name: "February(leap-year)", income: selling_price * 29 * totalDaily}, { name: "March", income: selling_price * 31 * totalDaily}, { name: "April", income: selling_price * 30 * totalDaily}, { name: "May", income: selling_price * 31 * totalDaily}, { name: "June", income: selling_price * 30 * totalDaily}, { name: "July", income: selling_price * 31 * totalDaily}, { name: "August", income: selling_price * 31 * totalDaily}, { name: "September", income: selling_price * 30 * totalDaily}, { name: "October", income: selling_price * 31 * totalDaily}, { name: "November", income: selling_price * 30 * totalDaily}, { name: "December", income: selling_price * 31 * totalDaily} ]

byMonth.forEach((bM)=>console.log(start + " " + bM.name+ " " 
+ "is"+ " " + bM.income));
}
leapYearReport()
