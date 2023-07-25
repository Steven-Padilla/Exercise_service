import { Request, Response } from "express";
import { UpdateExerciseUseCase } from "../../application/useCases/UpdateExerciseUseCase";
import { Exercise } from "../db/ExerciseModel";

export class UpdateExerciseController {
  constructor(readonly updateExerciseUseCase: UpdateExerciseUseCase) {}

  async run(req: Request, res: Response) {
    const body = req.body as Exercise;

    const exercise = await this.updateExerciseUseCase.run(
      body.id,
      body.sentences
    );
    return res.status(200).json(exercise);
  }
}
