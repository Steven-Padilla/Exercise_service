import { ExerciseEntity } from "../entity/ExerciseEntity";

export interface GetAllExercisesRepository {
  getAll(): Promise<Array<ExerciseEntity>>;
}
