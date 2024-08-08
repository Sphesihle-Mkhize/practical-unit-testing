// mostPopularCar.js
export function mostPopularCar(cars) {
    if (!Array.isArray(cars) || cars.length === 0) {
        throw new Error('Invalid input: must provide a non-empty array of cars');
    }

    const carCounts = cars.reduce((acc, car) => {
        const key = `${car.make} ${car.model}`;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {});

    let maxCount = 0;
    let mostPopular = '';

    for (const [car, count] of Object.entries(carCounts)) {
        if (count > maxCount) {
            maxCount = count;
            mostPopular = car;
        }
    }

    return mostPopular;
}
