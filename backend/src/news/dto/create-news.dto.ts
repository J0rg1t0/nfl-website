import {IsNotEmpty, IsString} from 'class-validator';

export class CreateNewsDto {
    
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    link: string;
}
