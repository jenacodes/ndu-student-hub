import HeroSection from "@/components/HeroSection";
import TodayOnCampusSection from "@/components/TodayOnCampusSection";
import UpdatesSection from "@/components/UpdatesSection";
import EventsSection from "@/components/EventsSection";
import Image from "next/image";
import StudentsUnionSection from "@/components/StudentsUnionSection";
import ImportantAnnouncementsSection from "@/components/ImportantAnnouncementsSection.jsx";
import AboutNduStudentHubSection from "@/components/AboutNduStudentHubSection";
import SportsNewsSection from "@/components/SportsNewsSection";
import WeeklySpotlightSection from "@/components/WeeklySpotlightSection";
const HomePageContent = () => {
  return (
    <>
      <HeroSection />
      <section className="py-12 px-4 md:px-8">
        <Image
          src="/images/ndu-part-time-admission-list.jpg"
          alt="An overview of NDU university"
          width={1290}
          height={946}
          className="mx-auto mb-8"
        />
      </section>
      <ImportantAnnouncementsSection />
      <WeeklySpotlightSection />
      <UpdatesSection />
      <TodayOnCampusSection />
      <EventsSection />
      <SportsNewsSection />
      <StudentsUnionSection />
      <AboutNduStudentHubSection />
      {/* <section className="py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      </section> */}
    </>
  );
};

export default HomePageContent;
