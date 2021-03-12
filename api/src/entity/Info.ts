import { ChildEntity, Column } from 'typeorm';
import { Slide } from './Slide';

export enum SlideType {
  SIMPLE = 'simple'
}

@ChildEntity()
/**
 * Info entity.
 */
export class Info extends Slide {
  @Column({
    type: 'enum',
    enum: SlideType,
    default: SlideType.SIMPLE
  })
  type!: SlideType;

  @Column({ nullable: true })
  headline!: string;

  @Column({ nullable: true })
  imageURL!: string;
}
