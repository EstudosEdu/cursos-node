"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const routes_1 = __importDefault(require("./routes/routes"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true })); //pesquisar sobre essa linha de codigo
app.use(routes_1.default);
app.listen(3000, () => {
    console.log('serve is running: http://localhost:3000');
});
