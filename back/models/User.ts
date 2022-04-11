import { DataTypes } from "sequelize/types";
import { sequelize } from "../db/db";

export const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    status: {type: DataTypes.BOOLEAN},
    mail: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING},
})