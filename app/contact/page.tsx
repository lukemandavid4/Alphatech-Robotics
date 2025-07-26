"use client";
import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      subject: e.target.subject.value.trim(),
      message: e.target.message.value.trim(),
    };

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Send error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 md:gap-16 w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8 md:pt-16">
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold">Contact Us</h1>
          <p className="text-[var(--muted-foreground)]">
            Get in touch with our team. We're here to help with any questions
            about our products or services.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full gap-4 lg:gap-8">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <h1 className="text-[1.5rem] font-semibold text-center md:text-start">
              Get In Touch
            </h1>
            <p className="text-[var(--muted-foreground)]">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
            <div className="flex items-center gap-4 border border-[var(--input)] p-6 md:p-8 rounded-[0.5rem]">
              <div className="bg-[var(--card-one-background)] p-3 text-[var(--primary)] rounded-[0.3rem]">
                <Phone />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[0.9rem]">Phone</span>
                <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                  +254 781 977 022
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border border-[var(--input)] p-6 md:p-8 rounded-[0.5rem]">
              <div className="bg-[var(--card-one-background)] p-3 text-[var(--primary)] rounded-[0.3rem]">
                <Mail />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[0.9rem]">Email</span>
                <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                  roboticsalphatech@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border border-[var(--input)] p-6 md:p-8 rounded-[0.5rem]">
              <div className="bg-[var(--card-one-background)] p-3 text-[var(--primary)] rounded-[0.3rem]">
                <Clock />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[0.9rem]">
                  Business Hours
                </span>
                <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                  Monday - Saturday: 8AM - 9PM
                </span>
                <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                  Sunday: Closed
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border border-[var(--input)] p-6 md:p-8 rounded-[0.5rem]">
              <div className="bg-[var(--card-one-background)] p-3 text-[var(--primary)] rounded-[0.3rem]">
                <MapPin />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[0.9rem]">Location</span>
                <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                  Thika, Kenya
                </span>
              </div>
            </div>
          </div>
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-6 border border-[var(--input)] p-4 lf:p-8 rounded-[0.5rem] w-full md:w-1/2"
          >
            <div>
              <h1 className="text-[1.5rem] font-semibold">Send us a message</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between justify-between w-full gap-6 lg:gap-2">
              <div className="flex flex-col w-full lg:w-1/2">
                <label htmlFor="name" className="text-[0.9rem] font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  className="border border-[var(--input)] rounded-[0.5rem] p-2 text-[0.9rem] outline-[var(--primary)]"
                />
              </div>
              <div className="flex flex-col w-full lg:w-1/2">
                <label htmlFor="email" className="text-[0.9rem] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="border border-[var(--input)] rounded-[0.5rem] p-2 text-[0.9rem] outline-[var(--primary)]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-[0.9rem] font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="What is this regarding?"
                className="border border-[var(--input)] rounded-[0.5rem] p-2 text-[0.9rem] outline-[var(--primary)]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-[0.9rem] font-semibold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell us how we can help you..."
                rows={10}
                className="border border-[var(--input)] rounded-[0.5rem] p-2 text-[0.9rem] outline-[var(--primary)] resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full p-3 rounded font-bold text-white ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
