import { CreateExerciseRepositoryImpl } from "../repository/CreateExerciseRepositoryImpl";
import { CreateExerciseUseCase } from "../../application/useCases/CreateExerciseUseCase";
import { CreateExerciseController } from "../controllers/CreateExerciseController";

//main
const createExerciseRepositoryImpl = new CreateExerciseRepositoryImpl();

//Dependency to create a exercise
const createExerciseUseCase = new CreateExerciseUseCase(createExerciseRepositoryImpl);
export const createExerciseController = new CreateExerciseController(
  createExerciseUseCase
);
