import Image from "next/image";

export default function Avatar({ name, picture, width, height }) {
  const url = picture.url ?? picture[0].url;

  return (
    <div className="flex items-center">
      <Image
        src={`${
          url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
        }${url}`}
        className="w-12 h-12 rounded-full mr-4 grayscale"
        width={width}
        height={height}
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
