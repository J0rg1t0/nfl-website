import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn 
} from 'typeorm';

@Entity()
export class Stadium extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

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
