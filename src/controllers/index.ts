import Pet from "../models";
import { Request, Response } from "express"; 

class PetController { 
    public async create(req: Request, res: Response): Promise<any> {
        try {
            const { name, specie, age, owner, phone } = req.body;
            const pet = await Pet.create({ name, specie, age, owner, phone });
            if (pet) {
                return res.json({ message: "Pet cadastrado com sucesso!" });
            }
        }catch (error) {
            return res.status(400).json({ message: "erro ao cadastrar o pet", error });
        }
}
}