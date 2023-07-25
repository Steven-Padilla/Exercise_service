import { Model, DataTypes } from "sequelize";
import { postgresConnection } from "./DBConnection";
import { ExerciseEntity } from "../../domain/entity/ExerciseEntity";
export class Exercise extends Model implements ExerciseEntity {
  declare id: number;
  declare sentences: Array<string>;
}
Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sentences: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
  },
  { sequelize: postgresConnection, modelName: "exercises" }
);
