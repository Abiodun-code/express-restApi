import { signUp } from "../controller/User";
import express, {Router} from "express";

const router:Router = express.Router();

router.post("/signup", signUp);

const userRouter = router;

export default userRouter;