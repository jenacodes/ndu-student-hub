import Link from "next/link";
import Image from "next/image";
import NotFoundMessage from "@/components/NotFoundMessage";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTags } from "react-icons/fa";
import { PortableText } from "next-sanity";

import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "news"]{ "slug": slug.current }`
  );
  return slugs.map((slug) => ({ slug: slug.slug }));
}

const NewsArticlePage = async ({ params }) => {
  // const allNewsArticles = [
  //   {
  //     id: "new-library-wing-announcement",
  //     category: "Campus News",
  //     title: "University Announces New State-of-the-Art Library Wing",
  //     imageUrl: "/images/news-library-wing.jpg",
  //     date: "May 28, 2025",
  //     author: "University Administration",
  //     // Using an array of paragraphs for the body for more structured content
  //     body: [
  //       "The university is thrilled to announce the upcoming construction of a new, state-of-the-art library wing, set to break ground next month. This ambitious project aims to provide students and faculty with enhanced learning resources and modern study environments.",
  //       "The new wing will feature collaborative study rooms equipped with the latest technology, quiet individual study zones, expanded digital archives, a dedicated research commons, and a much-anticipated cafe. The design prioritizes natural light and sustainable building practices.",
  //       '"This expansion reflects our commitment to providing world-class academic facilities for our students," said Vice-Chancellor [Vice-Chancellor\'s Name]. "We believe this new space will become a central hub for learning, research, and collaboration on campus."',
  //       "Further details regarding the construction timeline and alternative study spaces during the build will be communicated shortly. The university appreciates the patience and understanding of the campus community during this exciting development.",
  //     ],
  //     tags: ["library", "campus development", "academics", "student resources"],
  //   },
  //   {
  //     id: "engineering-research-grant-solar",
  //     category: "Academics",
  //     title:
  //       "Research Grant Awarded to Engineering Department for Renewable Energy Project",
  //     imageUrl: "/images/news-research-grant.jpg",
  //     date: "May 25, 2025",
  //     author: "Faculty of Engineering",
  //     body: [
  //       "The Faculty of Engineering is proud to announce that Professor Adaobi's research team has been awarded a significant grant to advance their groundbreaking work in renewable energy. The [Grant Name] grant, valued at [Amount], will support their project focused on developing next-generation solar panel technology.",
  //       "Professor Adaobi's research aims to create more efficient, durable, and cost-effective solar panels, potentially revolutionizing how we harness solar energy. The project will involve collaboration with industry partners and provide valuable research opportunities for postgraduate students.",
  //       '"This grant is a testament to the innovative spirit of our department and the dedication of our researchers," stated Dean [Dean\'s Name]. "We are excited about the potential impact of this project on sustainable energy solutions."',
  //     ],
  //     tags: [
  //       "research",
  //       "engineering",
  //       "renewable energy",
  //       "grants",
  //       "academics",
  //     ],
  //   },
  // ];

  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  const { slug } = await params;
  const query = groq`*[_type == "news" && slug.current == $slug][0]`;
  const article = await client.fetch(query, { slug });

  //404 UI
  if (!article) {
    return (
      <NotFoundMessage
        title="Article Not Found"
        message="  Sorry, we couldn't find the news article you were looking
          for."
        backLink="/news"
        backText="Back to All News"
        buttonColor="bg-green-600 hover:bg-green-700"
      />
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <article>
        {/* Article Header Image */}
        {urlFor(article.image).url() && (
          <div className="w-full h-72 sm:h-96 md:h-[500px] relative">
            <Image
              src={urlFor(article.image).url()}
              alt={`Cover image for ${article.title}`}
              fill
              className="brightness-75 object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl -mt-16 sm:-mt-24 md:-mt-32 relative z-10">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Meta Information (Date & Author) */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 space-x-4">
              <div className="flex items-center">
                <FaRegCalendarAlt />
                <span>
                  Published:{" "}
                  {new Date(article.publicationDate).toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>
              </div>
              {article.author && (
                <div className="flex items-center">
                  <HiOutlineUserGroup />
                  <span>By: {article.author}</span>
                </div>
              )}
            </div>

            {/* Article Body */}
            <div className="prose prose-lg prose-green max-w-none text-gray-700 leading-relaxed">
              <PortableText value={article.body} />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-2 flex items-center">
                  <FaTags />
                  Tags:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back to News Link */}
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <Link
                href="/news"
                className="text-green-600 hover:text-green-800 font-semibold transition-colors"
              >
                &larr; Back to All News
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsArticlePage;
