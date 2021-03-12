import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './User';

export enum NickNameSetting {
  GENERATOR = 'generator',
  CHECK = 'check',
  NOCHECK = 'nocheck'
}

@Entity()
/**
 * Spiel entity.
 */
export class Spiel {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  public!: boolean;

  @ManyToOne(() => User, (user) => user.games)
  owner!: User;

  // TODO questions, slides
  @Column({
    type: 'enum',
    enum: NickNameSetting,
    default: NickNameSetting.CHECK
  })
  nickname!: string;

  @Column({ default: true })
  randomizeAnswers!: boolean;

  @Column({ default: true })
  randomizeQuestions!: boolean;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt!: Date;
}