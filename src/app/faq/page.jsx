import FaqItem from "@/components/FaqItem";

export default function FaqPage() {
  const faqData = [
    {
      question: "What is ndustudenthub?",
      answer:
        "ndustudenthub is a student-led platform designed to be the central information hub for students. We provide up-to-date news, event details, academic resources, club information, and much more to make campus life easier and more connected.",
    },
    {
      question: "How is the information on this site kept up-to-date?",
      answer:
        "Our information is managed by a dedicated team of student contributors who work closely with university departments, the SUG, and various clubs. We strive to update content as soon as new information becomes available. For official academic or financial dates, always cross-reference with the official university portal.",
    },
    {
      question:
        "I am a part of a club. How can I get my club's events featured?",
      answer:
        "We'd love to feature your club! Please visit our 'Want to Contribute?' page or use the Contact Us form to send us the details of your event. A member of our team will get in touch with you.",
    },
    {
      question: "I found incorrect information on a page. What should I do?",
      answer:
        "Thank you for helping us stay accurate! Please use the Contact Us page to send us a message with a link to the page and a description of the incorrect information. We will correct it as soon as possible.",
    },
    {
      question: "How can I join the ndustudenthub team?",
      answer:
        "We are always looking for passionate students to join us as writers, photographers, or tech contributors. Please check out our 'Want to Contribute?' page for more information on available roles and how to apply.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Have a question? We've got answers. If you can't find what you're
            looking for, feel free to contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <dl className="space-y-4">
              {faqData.map((item, index) => (
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
