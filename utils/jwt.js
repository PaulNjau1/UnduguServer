"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const signToken = (payload, expiresIn = env_1.env.JWT_EXPIRES_IN) => jsonwebtoken_1.default.sign(payload, env_1.env.JWT_SECRET, { expiresIn });
exports.signToken = signToken;
const verifyToken = (token) => jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
exports.verifyToken = verifyToken;
