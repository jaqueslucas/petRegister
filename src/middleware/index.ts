import { Request, Response, NextFunction } from "express";
import express from "express";

const validatePet = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const { name, age, specie} = req.body;

    if (!name || typeof  name !== "string") {
        return res.status(400).json({ message: "Missing or invalid Pet name" });
    }

    if (!age || typeof age !== "number") {
        return res.status(400).json({ message: "Missing or invalid Pet age" });
    }

    if (!specie || typeof specie !== "string") {
        return res.status(400).json({ message: "Missing or invalid Pet specie" });
    }
    next();
};

export default validatePet;