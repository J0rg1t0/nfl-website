import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn 
} from 'typeorm';

@Entity()
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    idStadium: number;

    @Column()
    city: string;

    @Column()
    superBowls: number;
    
    @Column()
    conferenceChampionships: number;

    @Column()
    legendaryPlayers: string[];

    @Column()
    logo: string;

    @Column()
    headCoach: string;

    @Column()
    owner: string;

    @Column()
    quarterback: string;

    @Column()
    website: string;

    @CreateDateColumn()
    created_at: Date;
}
