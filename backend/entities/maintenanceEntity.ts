import {Table, Column, Model, DataType} from 'sequelize-typescript';

@Table({tableName: 'maintenance'})
export class Maintenance extends Model {
    @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER})
    id!: number;

    @Column({type: DataType.STRING, allowNull: false})
    name!: string;

    @Column({type: DataType.STRING, allowNull: false})
    category!: string;

    @Column({type: DataType.STRING, allowNull: false})
    time_to_complete!: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    price?: number;

    @Column({type: DataType.STRING, allowNull: true})
    description?: string;
}