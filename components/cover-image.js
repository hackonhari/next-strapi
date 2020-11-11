import Link from "next/link";
import Image from 'next/image';

export default function CoverImage({ title, url, slug, width, height }) {
  const imageUrl = `${
    url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${url}`;
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>
            <Image src={imageUrl} alt={title} width={width} height={height} />
          </a>
        </Link>
      ) : (
        <Image src={imageUrl} alt={title} width={width} height={height} />
      )}
    </div>
  );
}
