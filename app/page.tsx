import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex w-full bg-white px-[10rem] h-screen items-center">
        <div className="flex flex-col gap-6 w-1/2">
          <p className="flex flex-col text-[3.75rem] text-[var(--primary)] font-bold leading-none">
            Latest Tech, <span className="text-black">Delivered Fast</span>
          </p>
          <p className="text-[var(--muted-foreground)]">
            Discover premium electronics from top brands. From cutting-edge
            smartphones to powerful laptops, we've got everything you need to
            stay connected and productive.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="flex items-center gap-4 px-6 py-2 bg-[var(--primary)] text-white rounded-[0.5rem] hover:bg-blue-600 transition duration-300"
            >
              Shop Now
              <ArrowRight className="w-[1rem] h-[1rem]" />
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 border rounded-[0.5rem] border-[var(--border)] hover:bg-[var(--border)] transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="w-full flex gap-4">
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl rounded-[0.5rem]
            p-6"
            >
              <div className="flex items-center justify-center bg-[var(--card-one-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-one-foreground)] rounded-[50vw]">
                  📱
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem]">Smartphones</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  Latest Models
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl mt-4 rounded-[0.5rem]
            p-6"
            >
              <div className="flex items-center justify-center bg-[var(--card-two-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-two-foreground)] rounded-[50vw]">
                  🎧
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem]">Audio</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  Premium Sound
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl rounded-[0.5rem]
            p-6 "
            >
              <div className="flex items-center justify-center bg-[var(--card-three-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-three-foreground)] rounded-[50vw]">
                  💻
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem]">Laptops</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  High Perfomance
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl mt-4 rounded-[0.5rem]
            p-6"
            >
              <div className="flex items-center justify-center bg-[var(--card-four-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-four-foreground)] rounded-[50vw]">
                  ⚡
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem]">Accessories</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  Essential gear
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
