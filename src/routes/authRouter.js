import { Router } from "express";

import {
  LoggingOut,
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
router.delete("/logout", tokenMiddleware, LoggingOut);
export default router;
