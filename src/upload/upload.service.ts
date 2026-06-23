import { uploadToCloudinary } from "../utils/cloudinary";

export const uploadMedia = async (files: Express.Multer.File[]) => {
  if (!files || files.length === 0) {
    throw new Error("No images provided");
  }

  const uploads = await Promise.all(
    files.map(async (file) => {
      const uploaded: any = await uploadToCloudinary(file);

      return {
        image: {
          url: uploaded.secure_url,
          public_id: uploaded.public_id,
          type: uploaded.resource_type,
        },
      };
    }),
  );

  return uploads;
};
