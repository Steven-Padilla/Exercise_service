import { ExerciseEntity } from "../entity/ExerciseEntity";

export interface CreateExerciseRepository {
  createExercise(
    sentences: Array<string>
  ): Promise<ExerciseEntity>;
}
