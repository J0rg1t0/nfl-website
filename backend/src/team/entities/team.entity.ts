import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    ManyToOne,
} from 'typeorm';
import { Stadium } from '../../stadium/entities/stadium.entity';

@Entity()
export class Team extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @OneToOne(() => Stadium, stadium => stadium.id)
    // @JoinColumn({ name: 'idStadium' })
    // stadium: Stadium;

    @ManyToOne(() => Stadium, stadium => stadium.teams)
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

    @Column('text')
    legendaryPlayers: string;

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
}
