import { CreateExerciseRepository } from "../../domain/repository/CreateExerciseRepository";

export class CreateExerciseUseCase {
  constructor(readonly createExerciseRepository: CreateExerciseRepository) {}
  async run( sentences: Array<string>) {
    return await this.createExerciseRepository.createExercise( sentences);
  }
}
