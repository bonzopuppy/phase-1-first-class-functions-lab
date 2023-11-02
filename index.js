// Code your solution in this file!

let drivers = ['Antonia', 'Nuru','Amari','Mo'];

console.log(drivers);

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}
const lastTwoDrivers=returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers);

/*let selectingDrivers = function () {
    return returnFirstTwoDrivers() + returnLastTwoDrivers();
    }
*/

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, whichDriverFunction) {
    return whichDriverFunction(drivers)}; 

const todaysDrivers = selectDifferentDrivers (drivers, returnFirstTwoDrivers);
console.log(todaysDrivers);