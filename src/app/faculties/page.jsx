"use client";

import { useState, useEffect } from "react";
import FacultyCard from "@/components/FacultyCard";
import { client } from "@/sanity/lib/client";
import StudentUnionCard from "@/components/StudentsUnionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function FacultiesPage() {
  const [faculties, setFaculties] = useState([]);
  const [sortOption, setSortOption] = useState("alphabetical");
  const [deans, setDeans] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      const data = await client.fetch(`
        *[_type == "faculty"]{
          _id,
          name,
          "id": id.current,
          description,
          "imageUrl": imageUrl.asset->url,
          departments[]->{
            _id,
            name,
            "id": slug.current
          }
        }
      `);

      setFaculties(data);
    };

    fetchFaculties();
  }, []);

  useEffect(() => {
    const fetchDeans = async () => {
      const data = await client.fetch(`
      *[_type == "dean"]{
        _id,
        name,
        position,
        faculty,
        "image": image.asset->url
      }
    `);
      setDeans(data);
    };

    fetchDeans();
  }, []);

  const sortedFaculties = [...faculties].sort((a, b) => {
    if (sortOption === "alphabetical") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "reverse") {
      return b.name.localeCompare(a.name);
    } else {
      return 0; // default order in sanity
    }
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="bg-blue-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Faculties & Departments
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the academic structure of Niger Delta University, from our
            diverse faculties to their specialized departments.
          </p>

          {/* Sort dropdown */}
          <div className="mt-6">
            <label className="text-sm mr-2">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="text-black px-3 py-1 rounded-md"
            >
              <option value="alphabetical">A-Z</option>
              <option value="reverse">Z-A</option>
              <option value="default">Default</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto space-y-12">
          {sortedFaculties.map((faculty) => (
            <FacultyCard
              key={faculty._id}
              name={faculty.name}
              description={faculty.description}
              imageUrl={faculty.imageUrl}
              departments={faculty.departments?.sort((a, b) =>
                a.name.localeCompare(b.name)
              )}
            />
          ))}
        </div>
      </section>

      {/* Faculty Deans Section */}
      <section className="section sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Meet The Deans Of Each Faculty
            </h2>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the dedicated individuals leading our faculties and
              guiding academic excellence.
            </p>
          </div>

          {deans.length > 0 ? (
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
              {deans.map((leader) => (
                <SwiperSlide key={leader._id}>
                  <StudentUnionCard
                    imageUrl={leader.image}
                    name={leader.name}
                    post={leader.faculty}
                    hoverColor="group-hover:text-blue-600"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500 text-2xl">
              Faculty deans information coming soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
