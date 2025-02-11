import { PartialType } from '@nestjs/mapped-types';
import { CreateSuggestionDto } from './create-suggestion.dto';
import {IsNotEmpty, IsString} from 'class-validator';


export class UpdateSuggestionDto extends PartialType(CreateSuggestionDto) {
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
