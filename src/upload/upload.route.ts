import { Router } from "express";
import { uploadMedia } from "./upload.service";
import { upload } from "../middleware/upload.middleware";
import { uploadController } from "./upload.controller";

export const uploadRoutes = Router();

uploadRoutes.post("/", upload.array("media"), uploadController);
