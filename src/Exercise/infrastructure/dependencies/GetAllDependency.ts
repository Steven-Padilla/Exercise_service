import { GetAllExercisesRepositoryImpl } from "../repository/GetAllRepositoryImpl";
import { GetAllExerciesUseCase } from "../../application/useCases/GetAllExerciseUseCase";
import { GetAllExerciseController } from "../controllers/GetAllExercisesController";

//main
const getAllExercisesRepositoryImpl = new GetAllExercisesRepositoryImpl();

//Dependency to get all exercise
const getAllExerciseUseCase = new GetAllExerciesUseCase(
  getAllExercisesRepositoryImpl
);
export const getAllExerciseController = new GetAllExerciseController(
  getAllExerciseUseCase
);
