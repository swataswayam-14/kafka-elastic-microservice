import { CartRepositoryType } from "../types/repository.type"
import * as repository from "../repository/cart.repository";
import { CreateCart } from "./cart.service";

describe("cartService", () => {

    let repo: CartRepositoryType;

    beforeEach(() => {
        repo = repository.CartRepository;
    });
    afterEach(() => {
        repo = {} as CartRepositoryType;
    });

    it("should return correct data while creating cart", async() => {
        const mockCart = {
            title: "smartphone",
            amount: 200
        }
        jest.spyOn(repository.CartRepository, "create").mockImplementationOnce(() =>
            Promise.resolve({
                message: "fake respose from cart repository",
                input: mockCart
            })
        )
        const res = await CreateCart(mockCart, repo);
        expect(res).toEqual({
            message: "fake respose from cart repository",
            input: mockCart
        })
    })
})