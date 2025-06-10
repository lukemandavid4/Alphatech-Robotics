import React from "react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-16 w-full bg-white px-[10rem]">
        <div className="text-center pt-16">
          <h1 className="text-[2.5rem] font-bold">Contact Us</h1>
          <p className="text-[var(--muted-foreground)]">
            Get in touch with our team. We're here to help with any questions
            about our products or services.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[1.5rem] font-semibold">Get In Touch</h1>
            <p className="text-[var(--muted-foreground)]">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
            <div className="flex items-center gap-4 border border-[var(--input)] p-8 rounded-[0.5rem]">
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
            <div className="flex items-center gap-4 border border-[var(--input)] p-8 rounded-[0.5rem]">
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
            <div className="flex items-center gap-4 border border-[var(--input)] p-8 rounded-[0.5rem]">
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
            <div className="flex items-center gap-4 border border-[var(--input)] p-8 rounded-[0.5rem]">
              <div className="bg-[var(--card-one-background)] p-3 text-[var(--primary)] rounded-[0.3rem]">
                <MapPin />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[0.9rem]">Location</span>
                <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                  Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default page;
