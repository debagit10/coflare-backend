import { Response, Request } from "express";
import { uploadMedia } from "./upload.service";

export const uploadController = async (req: Request, res: Response) => {
  const response = await uploadMedia(req.files as Express.Multer.File[]);

  res.status(200).json({ message: "Stats returned", data: response });
};
