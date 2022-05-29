import { Router } from "express";
import { getPrueba, login, register} from "../controllers/users_control";

const router = Router()

router.get('/', getPrueba);
// router.post('/login', login);
router.post('/register', register);

export default router