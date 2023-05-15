import { Body, Controller, Get, Param, Post, Put, Query, UsePipes } from '@nestjs/common';
import { CarDto } from './car.dto';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService){}

    @Get()
    public async getCar(){
        return this.carService.getCar();
    }

    @Post()
    postCar(@Body() car: CarDto){
        return this.carService.postCar(car);
    }

    @Get(':id')
    getCarById(@Param('id') id: number){
        return this.carService.getCarById(id)
    }

    @Put(':id')
    updateCarById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name
        const propertyValue = query.property_value
        return this.carService.updateCarById(id, propertyName, propertyValue)
    }

}
