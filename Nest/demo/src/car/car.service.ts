import { Injectable, HttpException } from '@nestjs/common';
import { cars } from './cars.mock';

@Injectable()
export class CarService {

    private cars = cars;
    public async getCars() {
        return this.cars;
    }

    public postCar(car) {
        return this.cars.push(car);
    }

    public getCarById(id: Number): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const car = this.cars.find((car) => car.id === carId);
            if (!car) { throw new HttpException('Not Found', 404) }
            return resolve(car);
        });
    }

    public deleteCarById(id: number): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId);
            if (index == -1) {
                throw new HttpException('Not Found car', 404);
            }
            this.cars.splice(index, 1);
            return resolve(this.cars);
        })
    }

    public putCarById(id: number, propertyName: string, propertyValue: string): Promise<any> {
        const carId = Number(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) => car.id === carId );
            if (index == -1) {
                throw new HttpException('Not Found car', 404);
            }
            this.cars[index][propertyName] = propertyValue;
            return resolve(this.cars[index]);
        })
    }

}
