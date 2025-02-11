import { 
    BaseEntity, 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn 
} from 'typeorm';

@Entity()
export class Suggestion extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    suggestion: string;

    @CreateDateColumn()
    created_at: Date;
}
