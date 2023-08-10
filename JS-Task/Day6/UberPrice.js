class UberPrice {
    constructor(costPerKilometer, costPerMinute) {
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }

    priceCalculator(distanceInKilometers, timeInMinutes) {
        const distanceCost = this.costPerKilometer * distanceInKilometers;
        const timeCost = this.costPerMinute * timeInMinutes;
        const totalPrice = distanceCost + timeCost;
        return totalPrice;
    }
}
const uberCalculator = new UberPrice(2, 1);
const distance = 10;
const time = 20;

const price = uberCalculator.priceCalculator(distance, time);
console.log(`Uber Price is`);
console.log(price);
