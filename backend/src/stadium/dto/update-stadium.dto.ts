import { PartialType } from '@nestjs/mapped-types';
import { CreateStadiumDto } from './create-stadium.dto';
import {IsNotEmpty, IsNumber, IsString} from 'class-validator';


export class UpdateStadiumDto extends PartialType(CreateStadiumDto) {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsNumber()
    capacity: number;

    @IsNotEmpty()
    @IsString()
    inaugurationDate: string;

    @IsNotEmpty()
    @IsString()
    playingSurface: string;

    @IsNotEmpty()
    @IsString()
    roofType: string;

    @IsNotEmpty()
    @IsString()
    stadiumType: string;
}
