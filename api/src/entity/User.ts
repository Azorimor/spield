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
import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  minLength,
  MinLength
} from 'class-validator';

const SALT_WORK_FACTOR = 10;

@Entity()
/**
 * User entity.
 */
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  @MinLength(6)
  @IsAlphanumeric()
  username!: string;

  @Column({ unique: true })
  @IsEmail()
  email!: string;

  @Column({ select: false })
  password?: string;

  @Column({ nullable: true })
  @IsAlpha()
  @IsOptional()
  firstName!: string;

  @Column({ nullable: true })
  @IsAlpha()
  @IsOptional()
  lastName!: string;

  @Column({ nullable: true })
  @IsUrl()
  @IsOptional()
  avatarUrl!: string;

  @Column({ default: false, select: false })
  @IsNotEmpty()
  isAdmin!: boolean;

  @OneToMany(() => Spiel, (spiel: Spiel) => spiel.owner)
  games?: Spiel[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamptz', select: false })
  updatedAt?: Date;

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
