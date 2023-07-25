import { Exercise } from "../db/ExerciseModel";
import { GetAllExercisesRepository } from "../../domain/repository/GetAllExercisesRepository";

export class GetAllExercisesRepositoryImpl implements GetAllExercisesRepository {
  async getAll(): Promise<Exercise[]> {
    const listExercises = await Exercise.findAll();
    return listExercises;
  }
}
