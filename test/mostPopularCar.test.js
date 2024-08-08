// test/mostPopularCar.test.js
import assert from 'assert';
import { mostPopularCar } from '../mostPopularCar.js';

describe('mostPopularCar', function () {
    it('should return the most popular car make and model', function () {
        const cars = [
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Honda', model: 'Civic' },
            { make: 'Ford', model: 'Focus' },
            { make: 'Honda', model: 'Civic' },
            { make: 'Toyota', model: 'Corolla' }
        ];
        assert.strictEqual(mostPopularCar(cars), 'Toyota Corolla');
    });

    it('should return the most popular car when all cars are unique', function () {
        const cars = [
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Honda', model: 'Civic' },
            { make: 'Ford', model: 'Focus' },
            { make: 'Chevrolet', model: 'Malibu' }
        ];
        assert.strictEqual(mostPopularCar(cars), 'Toyota Corolla');
    });

    it('should handle an empty array input', function () {
        assert.throws(() => mostPopularCar([]), /Invalid input: must provide a non-empty array of cars/);
    });

    it('should handle invalid input', function () {
        assert.throws(() => mostPopularCar(null), /Invalid input: must provide a non-empty array of cars/);
        assert.throws(() => mostPopularCar(undefined), /Invalid input: must provide a non-empty array of cars/);
        assert.throws(() => mostPopularCar('not an array'), /Invalid input: must provide a non-empty array of cars/);
    });

    it('should return the correct car when there are ties', function () {
        const cars = [
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Honda', model: 'Civic' },
            { make: 'Toyota', model: 'Corolla' },
            { make: 'Honda', model: 'Civic' }
        ];
        const result = mostPopularCar(cars);
        assert(result === 'Toyota Corolla' || result === 'Honda Civic');
    });
});
