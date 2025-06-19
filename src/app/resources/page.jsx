import ResourceCard from "@/components/ResourceCard";
import { IoHome } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";
import PagesHeaderSection from "@/components/PagesHeaderSection";
import { FaMicrochip } from "react-icons/fa6";

const DocumentDownloadIcon = () => (
  <svg
    className="w-8 h-8 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    ></path>
  </svg>
);

export default function ResourceHubPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <PagesHeaderSection
        title="Student Resource Hub"
        subtitle="Your one-stop center for essential academic links, guides, and important university portals."
        bgColor="bg-gray-800"
        paragraphColor="text-gray-300"
        accentText=""
      />

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Academics & Registration Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <LuBookOpenCheck className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                Academics & Registration
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                title="Check Your Results"
                description="Access the official university portal to view your semester and cumulative results."
                link="#"
                linkText="Go to Results Portal"
                steps={[
                  "Navigate to the portal.",
                  "Enter your Matriculation Number.",
                  "Select the session and semester.",
                  "Click 'View Results'.",
                ]}
              />
              <ResourceCard
                title="Course Registration"
                description="Register your courses for the current semester through the student portal."
                link="#"
                linkText="Go to Course Registration"
                steps={[
                  "Log in with your student credentials.",
                  "Navigate to the 'Course Registration' section.",
                  "Select your courses and submit.",
                ]}
              />
              {/* <ResourceCard
                title="E-Learning Portal"
                description="Access course materials, submit assignments, and interact with lecturers on the official e-learning platform."
                link="#"
                linkText="Go to E-Learning"
              /> */}
            </div>
          </div>

          {/* Financials Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <FaRegCreditCard className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                Financials
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                title="Pay School Fees"
                description="Generate your payment invoice (Remita) and complete your school fees payment online or at a designated bank."
                link="#"
                linkText="Go to Payment Portal"
                steps={[
                  "Log in to generate your RRR number.",
                  "Choose your payment method (online/bank).",
                  "Complete the payment and print your receipt.",
                ]}
              />
              <ResourceCard
                title="Scholarship Information"
                description="Find information on available scholarships, grants, and financial aid opportunities."
                link="#"
                linkText="View Scholarships"
              />
            </div>
          </div>

          {/* Student Services Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <IoHome className="w-8 h-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                Student Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                title="Hostel Accommodation"
                description="Apply for hostel accommodation or check your allocation status via the student services portal."
                link="#"
                linkText="Go to Accommodation Portal"
              />
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center mb-6">
              <FaMicrochip className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                ICT & Technical Support
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                title="ICT Help Desk"
                description="For hands-on assistance with portal issues, password resets, or other technical problems, visit the ICT Help Desk."
                imageUrl="/images/ict-building.jpg"
                location="ICT Building, New Site"
                hours="Mon - Fri, 9:00 AM - 4:00 PM"
              />
            </div>
          </div>

          {/* Important Documents Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <DocumentDownloadIcon />
              <h2 className="text-3xl font-bold text-gray-900 ml-3">
                Important Documents
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                title="Academic Calendar"
                description="Download the official academic calendar for the current session to stay informed about key dates and deadlines."
                link="#" // Replace with direct link to PDF
                linkText="Download Calendar"
              />
              <ResourceCard
                title="Student Handbook"
                description="Access the official student handbook for rules, regulations, and important university policies."
                link="#" // Replace with direct link to PDF
                linkText="Download Handbook"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
