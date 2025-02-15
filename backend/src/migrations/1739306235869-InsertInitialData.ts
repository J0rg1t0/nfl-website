import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import * as fs from 'fs';

export class InsertInitialData1739306235869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const data = fs.readFileSync('src/migrations/initial-data.json');
        const parsedData = JSON.parse(data.toString());

        await queryRunner.createTable(
            new Table({
                name: 'stadium',
                columns: [
                    {
                        name: 'id',
                        type: 'INTEGER',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'city',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'state',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'capacity',
                        type: 'INTEGER',
                        isNullable: false
                    },
                    {
                        name: 'inaugurationDate',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'playingSurface',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'roofType',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'stadiumType',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'image',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'image2',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'image3',
                        type: 'TEXT',
                        isNullable: false
                    }
                ]
            })
        )

        await queryRunner.createTable(
            new Table({
                name: 'team',
                columns: [
                    {
                        name: 'id',
                        type: 'INTEGER',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'idStadium',
                        type: 'INTEGER',
                        isNullable: false
                    },
                    {
                        name: 'city',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'superBowls',
                        type: 'INTEGER',
                        isNullable: false
                    },
                    {
                        name: 'conferenceChampionships',
                        type: 'INTEGER',
                        isNullable: false
                    },
                    {
                        name: 'legendaryPlayers',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'logo',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'headCoach',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'owner',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'quarterback',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'website',
                        type: 'TEXT',
                        isNullable: false
                    }
                ]
            })
        )

        await queryRunner.createTable(
            new Table({
                name: 'news',
                columns: [
                    {
                        name: 'id',
                        type: 'INTEGER',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'title',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'content',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'image',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'link',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'date',
                        type: 'TEXT',
                        isNullable: false
                    }
                ]
            })
        )

        await queryRunner.createTable(
            new Table({
                name: 'suggestion',
                columns: [
                    {
                        name: 'id',
                        type: 'INTEGER',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'name',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'age',
                        type: 'INTEGER',
                        isNullable: false
                    },
                    {
                        name: 'phone',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'idTeam',
                        type: 'INTEGER',
                        isNullable: false
                    },
                    {
                        name: 'subject',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'suggestion',
                        type: 'TEXT',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'TEXT',
                        isNullable: false
                    }
                ]
            })
        )
            

        await queryRunner.createForeignKey('team', new TableForeignKey({
            columnNames: ['idStadium'],
            referencedColumnNames: ['id'],
            referencedTableName: 'stadium',
            onDelete: 'RESTRICT',
            onUpdate: "RESTRICT",
        }));

        await queryRunner.createForeignKey('suggestion', new TableForeignKey({
            columnNames: ['idTeam'],
            referencedColumnNames: ['id'],
            referencedTableName: 'team',
            onDelete: 'RESTRICT',
            onUpdate: "RESTRICT",
        }));

        parsedData.team.forEach(team => {
            team.legendaryPlayers = team.legendaryPlayers.join(', ')
        });

        await queryRunner.manager.insert('stadium', parsedData.stadium);
        await queryRunner.manager.insert('team', parsedData.team);
        await queryRunner.manager.insert('news', parsedData.news);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
