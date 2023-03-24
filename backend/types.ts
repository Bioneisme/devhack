import {Request} from "express";
import {Admin, User} from "./entities";

export type UserRequest = Request & { user: User | Admin | undefined, locals: Date };