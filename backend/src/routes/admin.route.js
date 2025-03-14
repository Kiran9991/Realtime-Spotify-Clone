import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";

const router = Router();

router.get('/', getAdmin);
console.log('admine routes')

export default router;