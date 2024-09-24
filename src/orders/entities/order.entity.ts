import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('order') // Puedes especificar el nombre de la tabla aquí
export class Order {
  @PrimaryColumn()
  id: number;

  @Column()
  product: string;

  @Column('decimal')
  price: number;

  @Column()
  quantity: number;

  @Column()
  status: string;
}
