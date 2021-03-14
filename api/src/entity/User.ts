import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm';
import { Spiel } from './Spiel';
import bcrypt from 'bcrypt';
import logger from '../util/logger';

const SALT_WORK_FACTOR = 10;

@Entity()
/**
 * User entity.
 */
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ nullable: true })
  firstName!: string;

  @Column({ nullable: true })
  lastName!: string;

  @OneToMany(() => Spiel, (spiel: Spiel) => spiel.owner)
  games!: Spiel[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  /**
   * Hash the password.
   * @return {Promise<void>} Nothing.
   */
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (!this.password) {
      // password not modified.
      return;
    }
    try {
      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
      logger.error(err);
    }
  }
}
