import { Request, Response } from "express";

import { GetAllExerciesUseCase } from "../../application/useCases/GetAllExerciseUseCase";

export class GetAllExerciseController {
  constructor(readonly getAllExercisesUseCase: GetAllExerciesUseCase) {}

  async run(req: Request, res: Response) {
    const listExercise = await this.getAllExercisesUseCase.run();
    return res.status(200).json(listExercise);
  }
}
