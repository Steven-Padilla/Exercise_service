import { ExerciseEntity } from "../entity/ExerciseEntity";

export interface UpdateExerciseRepository {
  updateExercise(id: number, sentences: Array<string>): Promise<ExerciseEntity>;
}
