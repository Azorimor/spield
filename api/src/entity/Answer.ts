import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './Question';

@Entity()
/**
 * Answer entity.
 */
export class Answer {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Question, (question: Question) => question.answers)
  question!: Question;

  @Column()
  text!: string;

  @Column({ default: false })
  correct!: boolean;
}
