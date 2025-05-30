"use client";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate API call
    console.log("Form data submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

    // Example response
    setSubmitMessage(
      "Thank you for your message! We will get back to you soon."
    );
    setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    setIsSubmitting(false);

    // In a real application, you would send this data to a backend API:
    // try {
    //   const response = await fetch('/api/contact', { // Your backend API endpoint
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     setSubmitMessage('Thank you for your message! We will get back to you soon.');
    //     setFormData({ name: '', email: '', subject: '', message: '' });
    //   } else {
    //     const errorData = await response.json();
    //     setSubmitMessage(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
    //   }
    // } catch (error) {
    //   setSubmitMessage('Error: Could not connect to the server. Please try again later.');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-orange-600 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-orange-100 max-w-3xl mx-auto">
            We&apos;re here to help and eager to hear from you! Whether you have
            a question, suggestion, or just want to say hello, feel free to
            reach out.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Contact Information Column */}
            <div className="lg:col-span-1 mb-12 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CiMail className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email Us
                    </h3>
                    <p className="text-gray-600">
                      For general inquiries, feedback, or support:
                    </p>
                    <a
                      href="mailto:contact@ndustudenthub.com"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      contact@ndustudenthub.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      We aim to respond within 24-48 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Call Us
                    </h3>
                    <p className="text-gray-600">
                      For urgent matters or direct assistance:
                    </p>
                    <a
                      href="tel:+2348031234567"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      +234 706 888 29365
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Available Mon-Fri, 9 AM - 5 PM (WAT)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <IoLocationOutline className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Visit Our Office
                    </h3>
                    <p className="text-gray-600">
                      ndustudenthub Team / SUG Office,
                      <br />
                      Student Centre, Room 101,
                      <br />
                      Niger Delta University,
                      <br />
                      123 Student Lane, Yenagoa, Nigeria, 560001
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Office Hours: Mon-Fri, 10 AM - 4 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="e.g., John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="e.g., you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="e.g., Feedback on Events Page"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
                {submitMessage && (
                  <p
                    className={`text-sm mt-4 p-3 rounded-md ${
                      submitMessage.startsWith("Error:")
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Find Us On The Map
          </h2>
          <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg shadow-md flex items-center justify-center">
            <p className="text-gray-500">Map coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
