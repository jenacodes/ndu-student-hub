import React from "react";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "NDU Pulse TV | Official Media Partner | ndustudenthub",
  description:
    "NDU Pulse TV – official media partner of NDU Student Hub. Watch the latest videos, campus highlights, and stories from Niger Delta University.",
};

const NduPulseTVPage = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <PagesHeaderSection
        title="NDU Pulse TV"
        subtitle="Official Media Partner of NDU Student Hub "
      />

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        {/* Latest Videos Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            🎬 Latest Videos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "NDU Freshers Welcome 2025",
                url: "https://www.youtube.com/embed/WP1yPCLJ6_s?start=566",
              },
              {
                title: "Campus Vox Pop: What Students Think About Exams",
                url: "https://youtu.be/yourVideoId2",
              },
              {
                title: "Inside NDU Carnival 2025",
                url: "https://youtu.be/yourVideoId3",
              },
            ].map((video, index) => (
              <Card key={index} className="rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    className="w-full h-60"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                  <div className="p-4 font-medium text-gray-700">
                    {video.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Stories Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            📰 Featured Stories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Meet the Faces Behind NDU Pulse TV",
                description:
                  "A look into the team bringing student stories to life through campus media.",
                link: "#",
              },
              {
                title: "Behind the Scenes: Covering the NDU Carnival",
                description:
                  "How the Pulse TV crew captured the biggest event of the semester.",
                link: "#",
              },
            ].map((story, index) => (
              <Card
                key={index}
                className="rounded-2xl hover:shadow-md transition"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-3">{story.description}</p>
                  <Button asChild>
                    <a href={story.link}>Read More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Announcements / Highlights */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            📢 Announcements & Highlights
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li>🎥 New episode of *Campus Vox Pop* drops this weekend!</li>
            <li>🎙️ NDU Pulse TV now covering the 2025 Faculty Week events.</li>
            <li>📺 Subscribe on YouTube for weekly campus stories.</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center pt-10 border-t">
          <h3 className="text-lg font-semibold mb-3">Follow NDU Pulse TV</h3>
          <div className="flex justify-center gap-4">
            <Button asChild variant="secondary">
              <a
                href="https://linktr.ee/ndupulsetv"
                target="_blank"
                rel="noreferrer"
              >
                Visit Linktree
              </a>
            </Button>
            <Button asChild>
              <a
                href="https://youtube.com/@ndupulsetv"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://instagram.com/ndupulsetv"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NduPulseTVPage;
