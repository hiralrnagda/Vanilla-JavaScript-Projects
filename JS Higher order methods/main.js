const companies =[
    {name: "Company One", category:"Finance", start:1990, end:2009},
    {name: "Company Two", category:"Retail", start:1992, end:2011},
    {name: "Company Three", category:"Auto", start:1999, end:2005},
    {name: "Company Four", category:"Finance", start:1989, end:2000},
    {name: "Company Five", category:"Retail", start:1987, end:2002},
    {name: "Company Six", category:"Tech", start:1993, end:2018},
    {name: "Company Seven", category:"Finance", start:1996, end:2017},
    {name: "Company Eight", category:"Tech", start:1995, end:2012},
    {name: "Company Nine", category:"Auto", start:1990, end:2005}
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//for loop
//for(let i=0;i< companies.length;i++){
    //console.log(companies[i]);
//}

//foreach
//companies.forEach(function(company){
    //console.log(company);
//});

//filter
//method 1-using for loop
//let canDrink =[];
//for(let i=0;i<ages.length;i++){
//    if(ages[i]>=21){
//        canDrink.push(ages[i]);
//    }
//}
//console.log(canDrink);


//filter method 2
//const canDrink = ages.filter(function(age){
//    if(age>=21){
//        return true;
//    }
//});
//console.log(canDrink);

//filter method 3 using ES6 arrow function
//const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

//filter retail companies
//const retailCompanies = companies.filter(function(company){
//    if(company.category === 'Retail'){
//        return true;
//   }
//});
//console.log(retailCompanies);

//using arrow function
const retailCompanies = companies.filter(company => company.category === 'Retail');
//console.log(retailCompanies);

//get 90's companies
const ninetiesCompanies = companies.filter(company => (company.start>=
    1990 && company.start < 2000))
//console.log(ninetiesCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start
    >= 10));
//console.log(lastedTenYears);

//map 

//create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});
//console.log(companyNames);

const test = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
});
//console.log(test);

//using ES6 arrow function
const testMap = companies.map(company => 
    `${company.name} [${company.start} - ${company.end}]`);
//console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2);

//combining two map
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

//console.log(ageMap);

//console.log(agesTimesTwo);
//console.log(agesSquare);

//sort
//const sortedCompanies = companies.sort(function(c1, c2){
//    if(c1.start > c2.start){
//        return 1;
//    } else{
//        return -1;
//    }
//});

//better way
const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
//console.log(sortedCompanies);

//sort 
const sortAge = ages.sort();
//console.log(sortAge); //look at the output

//sort ages-ascending order
const sortAges = ages.sort((a,b) => a-b);
//console.log(sortAges);

//sort ages-descending order
const sortAges1 = ages.sort((a,b) => b-a);
//console.log(sortAges1);

//reduce

//using for loop
//let ageSum = 0;
//for(let i= 0; i< ages.length ;i++){
//    ageSum += ages[i];
//}

//using reduce
//const ageSum = ages.reduce(function(total,age){
//    return total + age;
//},0);

//better way than above using arrow function
const ageSum = ages.reduce((total,age) => total + age , 0); //remember the second parameter ZERO
//console.log(ageSum);

//total years for companies
//const totalYears = companies.reduce(function(total,company){
//    return total + (company.end - company.start);
//},0); //remember the second parameter ZERO


//using es6 arrow function
const totalYears = companies.reduce((total,company) => total + (company.end - company.start),0); //remember the second parameter ZERO
//console.log(totalYears);

const combined = ages
    .map(age => age * 2)
    .filter(age => age > 40)
    .sort((a,b) => a-b)
    .reduce((a,b) => a + b, 0);

console.log(combined);