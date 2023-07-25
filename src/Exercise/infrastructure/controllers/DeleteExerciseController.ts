import { Request, Response } from "express";

import { DeleteExerciseUseCase } from "../../application/useCases/DeleteExerciseUseCase";

export class DeleteExerciseController {
  constructor(readonly deleteExerciseUseCase: DeleteExerciseUseCase) {}

  async run(req: Request, res: Response) {
    const { id } = req.params;
    const response = await this.deleteExerciseUseCase.run(Number(id));
    return res.status(200).json(response);
  }
}
