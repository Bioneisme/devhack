import {Table, Column, Model, DataType} from 'sequelize-typescript';
import {uuid} from "uuidv4";

@Table({tableName: 'admins'})
export class Admin extends Model {
    @Column({primaryKey: true, type: DataType.STRING, allowNull: false, defaultValue: () => uuid()})
    id!: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login!: string;

    @Column({type: DataType.STRING, allowNull: false})
    password!: string;
}