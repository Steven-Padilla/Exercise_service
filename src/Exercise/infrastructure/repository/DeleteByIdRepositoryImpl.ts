import { DeleteByIdRepository } from "../../domain/repository/DeleteByIdRepository";
import { Exercise } from "../db/ExerciseModel";

export class DeleteByIdRepositoryImpl implements DeleteByIdRepository {
  async deleteById(id: number): Promise<string> {
    const tarjet = await Exercise.findByPk(id);
    if (tarjet) {
      const { id } = tarjet;
      await tarjet.destroy();
      return `Exercise with id: <${id}> successfully deleted`;
    } else {
      return `Exercise with id: ${id} not found`;
    }
  }
}
