import { Router } from "express";
import PetController from "../controllers/index";
import express from "express";
import cors from 'cors';
import validatePet from '../middleware';

const app = express();
app.use(cors());
app.use(express.json());

const router = Router();

router.post("/api/pets", validatePet, PetController.create);
router.get("/api/pets", PetController.list);
router.get("/api/pets/search", PetController.list);
router.put("/api/pets/:id", validatePet, PetController.update);
router.delete("/api/pets/:id", PetController.delete);

app.use(router);

export default app;