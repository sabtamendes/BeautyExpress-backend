import { Router } from "express";

import {
  loggingOut,
  postSignIn,
  postSignUp
} from "../controllers/authController.js";

 import {
   signInValidation
 } from "../middlewares/signInValidationMiddleware.js";

import {
  signUpValidation
} from "../middlewares/signUpValidationMiddleware.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";


const router = Router();

router.post("/sign-up", signUpValidation, postSignUp);
router.post("/sign-in", signInValidation, postSignIn);
router.delete("/sign-out", tokenMiddleware, loggingOut);
export default router;
