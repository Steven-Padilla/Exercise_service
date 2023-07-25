import * as express from "express";
const exerciseRouter = express.Router();

import { getAllExerciseController } from "./dependencies/GetAllDependency";
import { createExerciseController } from "./dependencies/CreateExerciseDependency";
import { deleteExerciseController } from "./dependencies/DeleteExerciseDependency";
import { updateExerciseController } from "./dependencies/UpdateCourseDependency";

exerciseRouter.get("/exercise/",getAllExerciseController.run.bind(getAllExerciseController)
);
exerciseRouter.post("/exercise/",createExerciseController.run.bind(createExerciseController)
);
exerciseRouter.put("/exercise/", updateExerciseController.run.bind(updateExerciseController));
exerciseRouter.delete("/exercise/:id",deleteExerciseController.run.bind(deleteExerciseController)
);

export { exerciseRouter };
