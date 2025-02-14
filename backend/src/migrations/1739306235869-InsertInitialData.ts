import { MigrationInterface, QueryRunner } from "typeorm";
import * as fs from 'fs';

export class InsertInitialData1739306235869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const data = fs.readFileSync('src/migrations/initial-data.json');
        const parsedData = JSON.parse(data.toString());

        await queryRunner.query(`CREATE TABLE stadium (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, city TEXT NOT NULL, state TEXT NOT NULL, capacity INTEGER NOT NULL, inaugurationDate TEXT NOT NULL, playingSurface TEXT NOT NULL, roofType TEXT NOT NULL, stadiumType TEXT NOT NULL, image TEXT NOT NULL, image2 TEXT NOT NULL, image3 TEXT NOT NULL)`);
        await queryRunner.query(`CREATE TABLE team (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, idStadium INTEGER NOT NULL, city TEXT NOT NULL, superBowls INTEGER NOT NULL, conferenceChampionships INTEGER NOT NULL, legendaryPlayers TEXT NOT NULL, logo TEXT NOT NULL, headCoach TEXT NOT NULL, owner TEXT NOT NULL, quarterback TEXT NOT NULL, website TEXT NOT NULL)`);
        await queryRunner.query(`CREATE TABLE news (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, image TEXT NOT NULL, link TEXT NOT NULL, date TEXT NOT NULL)`);

        for (const stadium of parsedData.stadium) {
            await queryRunner.query(`INSERT INTO stadium (name, city, state, capacity, inaugurationDate, playingSurface, roofType, stadiumType, image, image2, image3) VALUES ('${stadium.name}', '${stadium.city}', '${stadium.state}', ${stadium.capacity}, '${stadium.inaugurationDate}', '${stadium.playingSurface}', '${stadium.roofType}', '${stadium.stadiumType}', '${stadium.image}', '${stadium.image2}', '${stadium.image3}')`);
        }
        for (const team of parsedData.team) {
            await queryRunner.query(`INSERT INTO team (name, idStadium, city, superBowls, conferenceChampionships, legendaryPlayers, logo, headCoach, owner, quarterback, website) VALUES ('${team.name}', ${team.idStadium}, '${team.city}', ${team.superBowls}, ${team.conferenceChampionships}, '${team.legendaryPlayers.join(', ')}', '${team.logo}', '${team.headCoach}', '${team.owner}', '${team.quarterback}', '${team.website}')`);
        }
        for (const news of parsedData.news) {
            await queryRunner.query(`INSERT INTO news (title, content, image, link, date) VALUES ('${news.title}', '${news.content}', '${news.image}', '${news.link}', '${news.date}')`);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
