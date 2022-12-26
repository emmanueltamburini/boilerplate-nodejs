import { Router } from "express";

import { BASE_PATH, ID_PATH } from "../constants/routes.constant.js";
import { exampleDelete, exampleGet, exampleGetAll, examplePost, examplePut } from "../controllers/example.controller.js";
import { validateFields } from "../middleware/validateFields.middleware.js";

const exampleRouter = Router();

exampleRouter.get(BASE_PATH, [
    validateFields
], exampleGetAll);

exampleRouter.get(ID_PATH, [
    validateFields
], exampleGet);

exampleRouter.post(BASE_PATH, [
    validateFields
], examplePost);

exampleRouter.put(ID_PATH, [
    validateFields
], examplePut);

exampleRouter.delete(ID_PATH, [
    validateFields
], exampleDelete);


export default exampleRouter;
