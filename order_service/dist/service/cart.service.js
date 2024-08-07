"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCart = exports.EditCart = exports.GetCart = exports.CreateCart = void 0;
const CreateCart = (input, repo) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield repo.create(input);
    return data;
});
exports.CreateCart = CreateCart;
const GetCart = (input, repo) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield repo.find(input);
    return data;
});
exports.GetCart = GetCart;
const EditCart = (input, repo) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield repo.update(input);
    return data;
});
exports.EditCart = EditCart;
const DeleteCart = (input, repo) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield repo.delete(input);
    return data;
});
exports.DeleteCart = DeleteCart;
