"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./core/db"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const commandeUrls_1 = __importDefault(require("./routes/commandeUrls"));
const port = 9090;
db_1.default;
app_1.default.use(cors_1.default());
app_1.default.use(body_parser_1.default.json());
app_1.default.use(commandeUrls_1.default);
app_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
