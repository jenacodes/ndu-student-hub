"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmitContentForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    authorName: "",
    faculty: "",
    category: "",
    content: "",
    snippet: "",
    eventDate: "",
    location: "",
    tags: [],
    image: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else if (name === "tags") {
      setFormData({ ...formData, tags: value.split(",") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    let imageRef = null;
    if (formData.image) {
      const imgData = new FormData();
      imgData.append("file", formData.image);

      const imgRes = await fetch("/api/upload-image", {
        method: "POST",
        body: imgData,
      });
      const imgResult = await imgRes.json();
      if (imgResult.success) {
        imageRef = imgResult.image;
      }
    }

    const res = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify({
        ...formData,
        image: imageRef,
        status: "pending",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    if (result.success) {
      router.push("/success");
      setFormData({
        title: "",
        authorName: "",
        faculty: "",
        category: "",
        content: "",
        snippet: "",
        eventDate: "",
        location: "",
        tags: [],
        image: null,
      });
    } else {
      console.error("Error submitting:", result.message);
      setStatus(" Submission failed: " + result.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-16">
      <h1 className="text-2xl font-bold mb-4">
        Submit Content to NDUSTUDENTHUB
      </h1>
      {status && <p className="mb-4 text-green-600">{status}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="authorName"
          placeholder="Your Name"
          value={formData.authorName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="faculty"
          placeholder="Faculty"
          value={formData.faculty}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="News">News</option>
          <option value="Event">Event</option>
          <option value="Spotlight">Spotlight</option>
          <option value="Resource">Resource</option>
        </select>

        {formData.category === "News" && (
          <>
            <textarea
              name="snippet"
              placeholder="Snippet / Short Description"
              value={formData.snippet}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={3}
              required
            />

            <input
              type="text"
              name="tags"
              placeholder="Tags (comma separated)"
              value={formData.tags.join(",")}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </>
        )}

        {formData.category === "Event" && (
          <>
            <input
              type="datetime-local"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </>
        )}

        <textarea
          name="content"
          placeholder="Main Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border rounded h-32"
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
