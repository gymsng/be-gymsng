"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTcpSocket = void 0;
const net_1 = __importDefault(require("net"));
function createTcpSocket(PORT, app) {
    const server = net_1.default.createServer();
    server.listen(PORT, () => {
    });
}
exports.createTcpSocket = createTcpSocket;
//# sourceMappingURL=tcpServer.js.map