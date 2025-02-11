import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import { Stadium } from '../../stadium/entities/stadium.entity';

@Entity()
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Stadium, stadium => stadium.id, { eager: true })
    @JoinColumn({ name: 'idStadium' })
    stadium: Stadium;

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
