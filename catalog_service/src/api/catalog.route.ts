import express, {Request, Response, NextFunction} from "express"

const router = express.Router();

router.post("/products", async(req:Request, res:Response, next:NextFunction) => {
    return res.status(201).json({});
})

export default router;