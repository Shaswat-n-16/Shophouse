import Router from "express";
import { body } from "express-validator";
import {
  signup,
  login,
  testController,
} from "../controllers/authcontroller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password").trim().isLength({ min: 5 }),
  body("firstName").trim().not().isEmpty(),
  body("lastName").trim().not().isEmpty(),
  signup
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Please enter a valid email."),
  body("password").trim().isLength({ min: 5 }),
  login
);

router.get("/test", requireSignIn, isAdmin, testController);

export default router;
