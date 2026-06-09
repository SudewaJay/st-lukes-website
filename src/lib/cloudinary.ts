import { Cloudinary } from "@cloudinary/url-gen";

export const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "ddyaxsck0";

export const cld = new Cloudinary({
  cloud: { cloudName: CLOUD_NAME },
  url: { secure: true },
});
