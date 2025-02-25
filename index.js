import express from "express";
import dotenv from "dotenv";
import connectURLDB from "./connections/URLDB.js";
import userModel from "./model/UserModel.js";
import userRoutes from "./routes/userRoutes.js";
import urlRoute from "./routes/URlRoutes.js";
