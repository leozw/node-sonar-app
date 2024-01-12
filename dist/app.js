"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./instrumentations");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.json('Hello, World!');
});
app.get('/buteco', (req, res) => {
    res.json({ mensagem: 'Bora tomar uma?' });
});
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`API rodando em http://localhost:${port}`);
    });
}
exports.default = app;
