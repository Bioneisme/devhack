import {Table, Column, Model, DataType} from 'sequelize-typescript';

@Table({tableName: 'users'})
export class User extends Model {
    @Column({primaryKey: true, autoIncrement: true, type: DataType.INTEGER})
    id!: number;

    @Column({type: DataType.STRING(20), unique: true, allowNull: false})
    phone!: string;

    @Column({type: DataType.STRING, allowNull: false})
    password!: string;

    @Column({type: DataType.STRING, allowNull: true})
    name?: string;
}