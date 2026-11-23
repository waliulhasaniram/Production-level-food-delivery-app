import express from "express";
import { loginUser } from "../controller/auth.js";
const route = express.Router();
route.post("/login", loginUser);
export default route;
