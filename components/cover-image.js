import Link from "next/link";
export default function CoverImage({ title, url, slug, formats }) {
  const { small, large, medium } = formats;
  const smallUrlLink = small.url;
  const mediumUrlLink = medium.url;
  // const largeUrlLink = large.url;
  console.log(smallUrlLink, mediumUrlLink);
  const smallUrl = `${
    smallUrlLink.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${smallUrlLink}`;

  const mediumUrl = `${
    mediumUrlLink.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${mediumUrlLink}`;

  // const largeUrl = `${
  //   largeUrlLink.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  // }${largeUrlLink}`;

  const imageUrl = `${
    url.startsWith("/") ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ""
  }${url}`;

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>
            <picture>
              <source media="(max-width:1400px)" scrset={smallUrl} />
              <source media="(min-width:1400px)" scrset={mediumUrl} />
              <img src={imageUrl} alt={title} />
            </picture>
          </a>
        </Link>
      ) : (
        <picture>
          <source media="(max-width:1400px)" scrset={smallUrl} />
          <source media="(min-width:1400px)" scrset={mediumUrl} />
          <img src={imageUrl} alt={title} />
        </picture>
      )}
    </div>
  );
}
