import { UpdateExerciseRepository } from "../../domain/repository/UpdateExerciseRepository";
import { Exercise } from "../db/ExerciseModel";

export class UpdateExerciseRepositoryImpl implements UpdateExerciseRepository {
  async updateExercise(
    id: number,
    sentences: Array<string>
  ): Promise<Exercise> {
    const exercise = await Exercise.findByPk(id);

    if (exercise) {
      return await exercise.update({
        id,
        sentences
      });
    } else {
      return new Exercise();
    }
  }
}
