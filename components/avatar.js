import Image from "next/image";
export default function Avatar({ name, picture }) {
  const url = picture.url ?? picture[0].url;
  const width = picture.width ?? picture[0].width;
  const height = picture.height ?? picture[0].height;

  const imageUrl = `${
    url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${url}`;
  return (
    <div className="flex items-center ">
      <div className="w-16 rounded-full mr-4 grayscale">
        <Image
          className=" rounded-full mr-4 grayscale"
          src={imageUrl}
          alt={name}
          width={width}
          height={height}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
