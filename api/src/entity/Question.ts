import { ChildEntity, Column, Entity, OneToMany } from 'typeorm';
import { Answer } from './Answer';
import { Slide } from './Slide';
import { Spiel } from './Spiel';

export enum QuestionType {
  TRUE_FALSE = 'truefalse',
  MULTIPLE_CHOICE = 'multiplechoice',
  OPEN = 'open',
  POLL = 'poll',
  CLOUD = 'cloud'
}

@ChildEntity()
/**
 * Question entity.
 */
export class Question extends Slide {
  @Column({
    type: 'enum',
    enum: QuestionType,
    default: QuestionType.MULTIPLE_CHOICE
  })
  type!: QuestionType;

  @Column()
  question!: string;

  @OneToMany(() => Answer, (answer: Answer) => answer.question)
  answers!: Answer[];
}
