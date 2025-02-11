import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateSuggestionDto {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    suggestion: string;
}
