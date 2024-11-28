import Pet from "../models";
import { Request, Response } from "express";

class PetController {
  public async create(req: Request, res: Response): Promise<any> {
    try {
      const { name, specie, age, tutor, tutor_phone } = req.body;
      const pet = await Pet.create({ name, specie, age, tutor, tutor_phone });
      if (pet) {
        return res.json({ message: "Pet created successfully", pet });
      }
    } catch (err) {
      return res.status(400).json({ message: "Error creating pet", err });
    }
  }

  public async list(req: Request, res: Response): Promise<any> {
    const { query } = req.query;
    try {
      if (query) {
        const pets_species = await Pet.find({ specie: query.toString() });
        const pets_names = await Pet.find({ name: query.toString() });
        if(pets_names && pets_names.length > 0){
          return res.status(200).json({ message: "List of pets", pets_names });
        }else if (pets_species && pets_species.length > 0) {  
          return res.status(200).json({ message: "List of pets", pets_species });
        }
      }
      const pets = await Pet.find();
      return res.status(200).json({ message: "List of pets", pets });
    } catch (err) {
      return res.status(400).json({ message: "Error listing pets", err });
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    const {id} = req.params;
    const { name, specie, age, tutor, tutor_phone } = req.body;
    try {
      const pet_updated = await Pet.findByIdAndUpdate(
        id,
        { name, specie, age, tutor, tutor_phone },
        { new: true }
      );
      if (pet_updated) {
        return res.json({ message: "Pet updated successfully", pet_updated });
      }
    } catch (err) {
      return res.status(400).json({ message: "Error updating pet", err });
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    try {
      const pet_deleted = await Pet.findByIdAndDelete(id);
      if (pet_deleted) {
        return res.json({ message: "Pet deleted successfully", pet_deleted });
      }
    } catch (err) {
      return res.status(400).json({ message: "Error deleting pet", err });
    }
  }
}

export default new PetController();