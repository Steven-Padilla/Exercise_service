import { UpdateExerciseRepositoryImpl } from "../repository/UpdateExerciseRepositoryImpl";
import { UpdateExerciseUseCase } from "../../application/useCases/UpdateExerciseUseCase";
import { UpdateExerciseController } from "../controllers/UpdateExerciseController";

const updateExerciseControllerImpl = new UpdateExerciseRepositoryImpl();

//Dependency to update a Exercise
const updateExerciseUseCase = new UpdateExerciseUseCase(updateExerciseControllerImpl);
export const updateExerciseController = new UpdateExerciseController(
  updateExerciseUseCase
);
