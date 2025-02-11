
import {IsNotEmpty, IsNumber, IsString, IsArray} from 'class-validator';

export class CreateTeamDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    idStadium: number;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsNumber()
    superBowls: number;

    @IsNotEmpty()
    @IsNumber()
    conferenceChampionships: number;

    @IsNotEmpty()
    @IsArray()
    legendaryPlayers: string;

    @IsNotEmpty()
    @IsString()
    logo: string;

    @IsNotEmpty()
    @IsString()
    headCoach: string;

    @IsNotEmpty()
    @IsString()
    owner: string;

    @IsNotEmpty()
    @IsString()
    quarterback: string;

    @IsNotEmpty()
    @IsString()
    website: string;
}
