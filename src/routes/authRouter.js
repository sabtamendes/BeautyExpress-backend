import { Router } from "express";

import {
  postSignIn,
  postSignUp
} from "../controllers/authController.js";

 import {
   signInValidation
 } from "../middlewares/signInValidationMiddleware.js";

import {
  signUpValidation
} from "../middlewares/signUpValidationMiddleware.js";


const router = Router();

router.post("/sign-up", signUpValidation, postSignUp);
router.post("/sign-in", signInValidation, postSignIn);

export default router;
