import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateStadiumDto {
    
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

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    image2: string;

    @IsNotEmpty()
    @IsString()
    image3: string;
}
