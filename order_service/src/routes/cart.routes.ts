import express, { NextFunction, Request, Response } from "express";
import * as service from "../service/cart.service";
import * as repository from '../repository/cart.repository';

const cartRoutes = express.Router();
const repo = repository.CartRepository

cartRoutes.get('/cart', async(req:Request, res:Response, next: NextFunction) => {
    const response = await service.GetCart(req.body, repo);
    return res.status(200).json(response)
})
cartRoutes.post('/cart', async(req:Request, res:Response, next: NextFunction) => {
    const response = await service.CreateCart(req.body, repo);
    return res.status(200).json(response)
})
cartRoutes.patch('/cart', async(req:Request, res:Response, next: NextFunction) => {
    const response = await service.EditCart(req.body, repo);
    return res.status(200).json(response)
})
cartRoutes.delete('/cart', async(req:Request, res:Response, next: NextFunction) => {
    const response = await service.DeleteCart(req.body, repo);
    return res.status(200).json(response)
})

export default cartRoutes;