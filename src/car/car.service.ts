import { HttpException, Injectable } from '@nestjs/common';
import { CARS } from './car.const';

@Injectable()
export class CarService {
    private carData = CARS

    getCar() {
        return this.carData
    }

    postCar(car) {
        this.carData.push(car)
        return this.carData
    }

    getCarById(id: number){
        const car = this.carData.find(car => car.id == id)
        if(!car){
            throw new HttpException('Not found', 404);
        }
        return car
    }

    updateCarById(id: number, propertyName: string, propertyValue: string){
        const index = this.carData.findIndex(car => car.id == id)
        if(index === -1){
            throw new HttpException('Not found', 404);
        }

        this.carData[index][propertyName] = propertyValue;
        return this.carData;
    }
}
