import { UpdateExerciseRepository } from "../../domain/repository/UpdateExerciseRepository";

export class UpdateExerciseUseCase {
  constructor(readonly updateExerciseRepository: UpdateExerciseRepository) {}
  async run(id: number, sentences: Array<string>) {
    return await this.updateExerciseRepository.updateExercise(id, sentences);
  }
}
