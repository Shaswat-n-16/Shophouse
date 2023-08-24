import Router from "express";
import { body } from "express-validator";
import {
  signup,
  login,
  forgotPassword,
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

router.post("/forgot-password", forgotPassword);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
