import { Team } from 'src/team/entities/team.entity';
import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';

@Entity()
export class Stadium extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Team, team => team.stadium)
    teams: Team[];

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    capacity: number;

    @Column()
    inaugurationDate: string;

    @Column()
    playingSurface: string;

    @Column()
    roofType: string;

    @Column()
    stadiumType: string;

    @Column()
    image: string;

    @Column()
    image2: string;

    @Column()
    image3: string;
}
