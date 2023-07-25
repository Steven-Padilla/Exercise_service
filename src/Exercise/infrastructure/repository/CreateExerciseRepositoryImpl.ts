import { CreateExerciseRepository } from "../../domain/repository/CreateExerciseRepository";
import { Exercise } from "../db/ExerciseModel";

export class CreateExerciseRepositoryImpl implements CreateExerciseRepository {
  async createExercise(
    sentences:Array<string>
  ): Promise<Exercise> {
    const exercise = await Exercise.create({
      sentences
    });
    return exercise;
  }
}
