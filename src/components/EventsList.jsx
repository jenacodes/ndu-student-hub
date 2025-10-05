"use client";

import { useState, useEffect } from "react";
import UpdatesCard from "@/components/UpdatesCard";
import Image from "next/image";
import Link from "next/link";

export default function EventsList({ activeCategory }) {
  const [events, setEvents] = useState([]);
  const [total, setTotal] = useState(0);
  const [start, setStart] = useState(0);
  const limit = 6;
  const [loading, setLoading] = useState(false); // For "Show More"
  const [initialLoading, setInitialLoading] = useState(true); // For first page load

  async function fetchEvents(startIndex, isInitial = false) {
    if (isInitial) {
      setInitialLoading(true);
    } else {
      setLoading(true);
    }

    try {
      const res = await fetch(`/api/events?start=${startIndex}&limit=${limit}`);
      const data = await res.json();

      if (isInitial) {
        setEvents(data.events);
      } else {
        setEvents((prev) => [...prev, ...data.events]);
      }

      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setInitialLoading(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEvents(0, true); // Load first batch
  }, []);

  // Apply category filter (client side)
  const filteredEvents =
    activeCategory === "all"
      ? events
      : events.filter((event) => event.category === activeCategory);

  // Show spinner during first load
  if (initialLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      {filteredEvents.length > 0 ? (
        <>
          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredEvents.map((event) => {
              const formattedDate = new Date(event.date).toLocaleDateString(
                "en-US",
                {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }
              );

              return (
                <UpdatesCard
                  key={event._id}
                  category={event.category}
                  title={event.title}
                  snippet={event.shortDescription}
                  imageUrl={event.imageUrl}
                  link={`/events/${event.slug}`}
                  date={formattedDate}
                  time={event.time}
                  venue={event.venue}
                />
              );
            })}
          </div>

          {/* Show More button */}
          {events.length < total && (
            <div className="mt-8 flex justify-center">
              <button
                disabled={loading}
                onClick={() => {
                  const newStart = start + limit;
                  setStart(newStart);
                  fetchEvents(newStart);
                }}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}
                {loading ? "Loading..." : "Show More"}
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="mt-6 text-center text-gray-600">
            Showing {events.length} of {total} events
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <Image
            src="/images/no-events-available.png"
            alt="No events"
            width={300}
            height={300}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            No Events Found
          </h2>
          <p className="text-gray-500 mb-4">
            There are no events in the “{activeCategory}” category.
          </p>
          <Link
            href="/events"
            className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors"
          >
            View All Events
          </Link>
        </div>
      )}
    </div>
  );
}
