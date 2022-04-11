import { DataTypes } from "sequelize/types";
import { sequelize } from "../db/db";
import { User } from "./User";

export const Tusk = sequelize.define('tusk', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
})