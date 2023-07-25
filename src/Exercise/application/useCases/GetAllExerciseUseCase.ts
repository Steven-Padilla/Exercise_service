import { GetAllExercisesRepository } from "../../domain/repository/GetAllExercisesRepository";

export class GetAllExerciesUseCase {
  constructor(readonly getAllExerciseRepository: GetAllExercisesRepository) {}
  async run() {
    return await this.getAllExerciseRepository.getAll();
  }
}
