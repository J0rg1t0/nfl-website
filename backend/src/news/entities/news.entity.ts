import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn 
} from 'typeorm';

@Entity()
export class News extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    image: string;

    @Column()
    link: string;

    @CreateDateColumn()
    created_at: Date;
}
