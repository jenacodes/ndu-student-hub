"use client";

import { useState, useEffect } from "react";
import UpdatesCard from "@/components/UpdatesCard";
import Image from "next/image";
import Link from "next/link";

export default function NewsList({ activeCategory, activeFaculty }) {
  const [news, setNews] = useState([]);
  const [total, setTotal] = useState(0);
  const [start, setStart] = useState(0);
  const limit = 6;
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  async function fetchNews(startIndex, isInitial = false) {
    if (isInitial) setInitialLoading(true);
    else setLoading(true);

    try {
      const url = `/api/news?start=${startIndex}&limit=${limit}&category=${activeCategory}&faculty=${activeFaculty}`;
      const res = await fetch(url);
      const data = await res.json();

      if (isInitial) setNews(data.news);
      else setNews((prev) => [...prev, ...data.news]);

      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setInitialLoading(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    setStart(0);
    fetchNews(0, true);
  }, [activeCategory, activeFaculty]);

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      {news.length > 0 ? (
        <>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {news.map((item) => (
              <UpdatesCard
                key={item._id}
                category={item.category}
                title={item.title}
                snippet={item.snippet}
                imageUrl={item.imageUrl}
                link={`/news/${item.slug}`}
                date={item.date}
                author={item.author}
                faculty={item.faculty}
              />
            ))}
          </div>

          {/* Show More Button */}
          {news.length < total && (
            <div className="mt-8 flex justify-center">
              <button
                disabled={loading}
                onClick={() => {
                  const newStart = start + limit;
                  setStart(newStart);
                  fetchNews(newStart);
                }}
                className="px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? "Loading..." : "Show More"}
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-6 text-center text-gray-600">
            Showing {news.length} of {total} news articles
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <Image
            src="/images/no-news-placeholder.svg"
            alt="No news found"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No News Found
          </h2>
          <p className="text-gray-500 mb-4">
            There are no articles in the selected category/faculty.
          </p>
          <Link
            href="/news"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            View All News
          </Link>
        </div>
      )}
    </div>
  );
}
