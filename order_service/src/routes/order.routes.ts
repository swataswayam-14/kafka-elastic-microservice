import express, { NextFunction, Request, Response } from "express";

const orderRoutes = express.Router();

orderRoutes.get('/order/:id', async(req:Request, res:Response, next: NextFunction) => {
    return res.status(200).json({
        message: "get order by id"
    })
})
orderRoutes.get('/order', async(req:Request, res:Response, next: NextFunction) => {
    return res.status(200).json({
        message: "get all orders"
    })
})
orderRoutes.post('/order', async(req:Request, res:Response, next: NextFunction) => {
    return res.status(200).json({
        message: "create order"
    })
})
orderRoutes.delete('/order/:id', async(req:Request, res:Response, next: NextFunction) => {
    return res.status(200).json({
        message: "delete order by id"
    })
})

export default orderRoutes;