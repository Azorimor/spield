import { Column, Entity, ManyToOne } from 'typeorm';
import { Question } from './Question';

@Entity()
/**
 * Answer entity.
 */
export class Answer {
  @ManyToOne(() => Question, (question: Question) => question.answers)
  question!: Question;

  @Column()
  text!: string;

  @Column({ default: false })
  correct!: boolean;
}
