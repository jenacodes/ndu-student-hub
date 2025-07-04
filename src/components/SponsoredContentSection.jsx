"use client";
import { useEffect, useState } from "react";
import UpdatesCard from "./UpdatesCard";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

export const revalidate = 60; // Revalidate page every 60 seconds

const SponsoredContentSection = () => {
  const [sponsoredPosts, setSponsoredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = groq`
        *[_type == "sponsorPost"] | order(_createdAt desc)[0...4]{
          _id,
          title,
          "id": _id,
          "snippet": body[0].children[0].text,
          "imageUrl": imageUrl.asset->url,
          "link": "/sponsored/" + slug.current,
          sponsoredBy
        }
      `;
      const posts = await client.fetch(query);
      setSponsoredPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            From Our Partners
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Special opportunities and announcements from our trusted sponsors.
          </p>
        </div>
        {sponsoredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {sponsoredPosts.map((post) => (
              <UpdatesCard key={post._id} {...post} isSponsored={true} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No sponsored content yet.</p>
        )}
      </div>
    </section>
  );
};

export default SponsoredContentSection;
