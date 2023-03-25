import {Table, Column, Model, DataType} from 'sequelize-typescript';

@Table({tableName: 'applications'})
export class Application extends Model {
    @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER})
    id!: number;

    @Column({type: DataType.INTEGER, allowNull: false})
    user_id!: number;

    @Column({type: DataType.STRING, allowNull: false})
    title!: string;

    @Column({type: DataType.STRING, allowNull: false})
    status!: string;

    @Column({type: DataType.STRING, allowNull: false})
    category!: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    price!: number;

    @Column({type: DataType.STRING, allowNull: true})
    description?: string;

    @Column({type: DataType.DATE, allowNull: true})
    date?: Date;
}