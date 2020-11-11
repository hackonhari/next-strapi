export default function Avatar({ name, picture }) {
  console.log(picture[0]);
  const url = picture.url ? picture.url : picture[0].url;

  const { formats } = picture[0];
  const thumbnailUrl = `${
    formats.thumbnail.url.startsWith("/")
      ? process.env.NEXT_PUBLIC_STRAPI_API_URL
      : ""
  }${formats.thumbnail.url}`;
  const imageUrl = `${
    url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${url}`;
  return (
    <div className="flex items-center">
      <picture className="object-cover rounded-full w-12 mr-4 h-12 grayscale">
        <source media="(max-width:1400px)" srcSet={thumbnailUrl} />
        <img
          className="rounded-full w-12 mr-4 h-12 grayscale"
          src={imageUrl}
          alt={name}
        />
      </picture>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
