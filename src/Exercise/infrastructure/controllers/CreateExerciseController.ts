import { Request, Response } from "express";
import { CreateExerciseUseCase } from "../../application/useCases/CreateExerciseUseCase";
import { Exercise } from "../db/ExerciseModel";

export class CreateExerciseController {
  constructor(readonly createExerciseUseCase: CreateExerciseUseCase) {}

  async run(req: Request, res: Response) {
    const body = req.body as Exercise;
    const exercise = await this.createExerciseUseCase.run(
      body.sentences
    );
    return res.status(200).json(exercise);
  }
}
