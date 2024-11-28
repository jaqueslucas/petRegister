import { Request, Response, NextFunction } from "express";
import express from "express";

const validatePet = async (req: Request, res: Response, next: NextFunction): Promise< void> => {
    const { name, age, specie} = req.body;

    if (!name || typeof  name !== "string") {
         res.status(400).json({ message: "Missing or invalid Pet name" });
         return;
    }

    if (!age || typeof age !== "number") {
        res.status(400).json({ message: "Missing or invalid Pet age" });
        return;
    }

    if (!specie || typeof specie !== "string") {
        res.status(400).json({ message: "Missing or invalid Pet specie" });
        return;
    }
    next();
};

export default validatePet;