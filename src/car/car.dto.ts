import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CarDto{

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    brand: string;

    @IsString()
    model: string;

    @IsString()
    @IsOptional()
    price: string;
}