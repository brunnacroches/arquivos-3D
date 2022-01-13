"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 5000;
class App {
    constructor(PORT) {
        this.PORT = PORT;
        const app = (0, express_1.default)();
        app.use(express_1.default.static(path_1.default.join(__dirname,'../client')));
        this.server = new http_1.default.Server(app);
    }
    Start() {
        this.server.listen(this.PORT, () => {
            console.log('Server listening on PORT ${this.PORT}.');
        });
    }
}

new App(PORT).Start();
