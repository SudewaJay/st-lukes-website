import Image, { type ImageProps } from "next/image";
import { CLOUD_NAME } from "@/lib/cloudinary";

type CldImageProps = Omit<ImageProps, "src" | "loader"> & {
  publicId: string;
};

// Custom loader builds res.cloudinary.com URLs with f_auto, q_auto, and width.
// Works in server components — no client-side hydration needed.
function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [
    "f_auto",
    `q_${quality ?? "auto"}`,
    `w_${width}`,
    "c_limit",
  ].join(",");
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${params}/${src}`;
}

export default function CldImage({ publicId, alt, ...rest }: CldImageProps) {
  return <Image loader={cloudinaryLoader} src={publicId} alt={alt} {...rest} />;
}
