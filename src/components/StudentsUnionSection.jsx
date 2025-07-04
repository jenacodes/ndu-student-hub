"use client";

import { useEffect, useState } from "react";
import StudentUnionCard from "@/components/StudentsUnionCard";
import Link from "next/link";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const revalidate = 60; // Revalidate page every 60 seconds

const StudentsUnionSection = () => {
  const [leadersData, setLeadersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "sugExecutive"] | order(_createdAt asc){
        _id,
        title,
        name,
        post,
        "image": image.asset->url
      }`;
      const data = await client.fetch(query);
      setLeadersData(data);
    };

    fetchData();
  }, []);

  return (
    <section className="section sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Meet Your Student Union Leaders
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the dedicated individuals representing your student
            body.
          </p>
        </div>

        {leadersData.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {leadersData.map((leader) => (
              <SwiperSlide key={leader._id}>
                <StudentUnionCard
                  imageUrl={leader.image}
                  name={leader.name}
                  post={leader.post}
                  hoverColor="group-hover:text-blue-600"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500 text-2xl">
            Student union information coming soon.
          </p>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/student-union"
            className="text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
          >
            Learn More About The SUG &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudentsUnionSection;
