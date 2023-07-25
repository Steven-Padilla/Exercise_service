import { DeleteByIdRepositoryImpl } from "../repository/DeleteByIdRepositoryImpl";
import { DeleteExerciseUseCase } from "../../application/useCases/DeleteExerciseUseCase";
import { DeleteExerciseController } from "../controllers/DeleteExerciseController";

const deleteByIdRepositoryImpl = new DeleteByIdRepositoryImpl();

//Dependenciy to delete a exercise
const deleteExerciseUseCase = new DeleteExerciseUseCase(deleteByIdRepositoryImpl);
export const deleteExerciseController = new DeleteExerciseController(
  deleteExerciseUseCase
);
