import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance
} from 'typeorm';
import { Spiel } from './Spiel';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
/**
 * Slide entity.
 */
export class Slide {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Spiel, (spiel: Spiel) => spiel.slides)
  spiel!: Spiel;
}
