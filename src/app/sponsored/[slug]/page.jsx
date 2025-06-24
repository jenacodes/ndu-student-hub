// app/sponsored/[slug]/page.jsx

import NotFoundMessage from "@/components/NotFoundMessage";
import { FaRegCalendar } from "react-icons/fa";
import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "sponsorPost"]{ "slug": slug.current }`
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

const SponsoredPostPage = async ({ params }) => {
  const { slug } = await params;

  const query = groq`
  *[_type == "sponsorPost" && slug.current == $slug][0]{
    title,
    slug,
    date,
    sponsoredBy,
    body,
    cta,
    sponsorInfo,
    "imageUrl": imageUrl.asset->url,
    "logoUrl": logoUrl.asset->url
  }
`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <NotFoundMessage
        title="Sponsored Content Not Found"
        message="Sorry, the page you were looking for could not be found."
        backLink="/"
        backText="Back to Homepage"
        buttonColor="bg-blue-600 hover:bg-blue-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article>
        {/* Header Image */}
        {post.imageUrl && (
          <div className="w-full h-72 sm:h-96 relative">
            <img
              src={post.imageUrl}
              alt={`Banner for ${post.title}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center px-4"></div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl -mt-24 sm:-mt-32 relative z-10">
            {/* Sponsored Post Header */}
            <div className="text-center mb-6 pb-6 border-b border-gray-200">
              <p className="text-sm font-bold text-green-700 uppercase tracking-widest">
                Sponsored Content
              </p>
              <p className="text-md text-gray-600 mt-1">In partnership with</p>
              {post.logoUrl ? (
                <div className="h-16 relative mt-2">
                  <img
                    src={post.logoUrl}
                    alt={`${post.sponsoredBy} Logo`}
                    className="max-h-16 mx-auto object-contain"
                  />
                </div>
              ) : (
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {post.sponsoredBy}
                </p>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <FaRegCalendar className="mr-2" />
              <span>Published: {post.date}</span>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <PortableText value={post.body} />
            </div>

            {/* CTA Button */}
            {post.cta?.link && (
              <div className="mt-10 text-center">
                <Link
                  href={post.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  {post.cta.text || "Learn More"}
                </Link>
              </div>
            )}

            {/* Sponsor Info */}
            {post.sponsorInfo && (
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  About Our Partner: {post.sponsoredBy}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {post.sponsorInfo.description}
                </p>
                {post.sponsorInfo.website && (
                  <Link
                    href={post.sponsorInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Visit their website &rarr;
                  </Link>
                )}
              </div>
            )}

            {/* Back to Home */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 font-semibold transition-colors text-sm"
              >
                &larr; Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SponsoredPostPage;
