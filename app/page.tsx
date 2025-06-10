import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
            p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-one-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-one-foreground)] rounded-[50vw]">
                  📱
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem] font-semibold">Smartphones</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  Latest Models
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl mt-4 rounded-[0.5rem]
            p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-two-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-two-foreground)] rounded-[50vw]">
                  🎧
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem] font-semibold">Audio</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  Premium Sound
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl rounded-[0.5rem]
            p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-three-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-three-foreground)] rounded-[50vw]">
                  💻
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem] font-semibold">Laptops</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  High Perfomance
                </span>
              </div>
            </div>
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-1/2 shadow-xl mt-4 rounded-[0.5rem]
            p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-four-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-four-foreground)] rounded-[50vw]">
                  ⚡
                </div>
              </div>
              <div className="flex flex-col h-1/3">
                <span className="text-[0.9rem] font-semibold">Accessories</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  Essential gear
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[var(--primary)] h-[2.75rem] text-white">
        <p className="text-[0.9rem]">
          🎉 Free shipping on orders over KSh 5,000 | 30-day return policy |
          2-year warranty
        </p>
      </div>
      <div className="flex flex-col gap-8 bg-white px-[10rem] h-screen">
        <div className="flex flex-col items-center w-full mt-[4rem]">
          <h1 className="text-[2rem] font-bold">Shop by Category</h1>
          <p className="text-[var(--muted-foreground)]">
            Find exactly what you're looking for in our organized product
            categories
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex gap-4">
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--smartphones)] rounded-[50vw]">
                📱
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Smartphones</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  50+ Products
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--laptops)] rounded-[50vw]">
                💻
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Laptops</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  30+ Products
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--audio)] rounded-[50vw]">
                🎧
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Audio</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  40+ Products
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--accessories)] rounded-[50vw]">
                🔌
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Accessories</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  80+ Products
                </span>
              </div>
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--storage)] rounded-[50vw]">
                💾
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Storage</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  25+ Products
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--gaming)] rounded-[50vw]">
                🎮
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Gaming</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  35+ Products
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--smarthome)] rounded-[50vw]">
                🏠
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Smart Home</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  20+ Products
                </span>
              </div>
            </Link>
            <Link
              href=""
              className="flex flex-col px-6 pt-8 pb-6 items-center justify-between shadow-xl h-[14.25rem] w-1/4 rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--wearables)] rounded-[50vw]">
                ⌚
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-0.9rem font-semibold">Wearables</span>
                <span className="text-[var(--muted-foreground)] text-[0.8rem]">
                  15+ Products
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 h-screen px-[10rem]">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-[2rem] font-bold">Trending Products</h1>
          <p className="text-[var(--muted-foreground)]">
            Discover our most popular electronics from trusted brands like
            Oraimo, Samsung, and Punex
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex w-full gap-4">
            <Link
              href="/shop"
              className="flex flex-col w-1/3 h-[35rem] shadow-xl rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Image src="/images/Necklace.webp" width={500} height={500} />
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                    AUDIO
                  </span>
                  <span className="p-1 bg-[var(--card-one-background)] text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
                    Oraimo
                  </span>
                </div>
                <p className="font-semibold text-[0.9rem]">
                  Oraimo FreePods 3C Wireless Earbuds
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">KSh 3,299</span>
                  <span className="text-[0.9rem] line-through text-[var(--muted-foreground)]">
                    KSh 4,999
                  </span>
                  <span className="text-[0.9rem] font-semibold text-[var(--audio)]">
                    Save KSh 1,700
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="flex justify-center text-white text-[0.9rem] py-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </Link>
            <Link
              href="/shop"
              className="flex flex-col w-1/3 h-[35rem] shadow-xl rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Image src="/images/Necklace.webp" width={500} height={500} />
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                    AUDIO
                  </span>
                  <span className="p-1 bg-[var(--card-one-background)] text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
                    Oraimo
                  </span>
                </div>
                <p className="font-semibold text-[0.9rem]">
                  Oraimo FreePods 3C Wireless Earbuds
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">KSh 3,299</span>
                  <span className="text-[0.9rem] line-through text-[var(--muted-foreground)]">
                    KSh 4,999
                  </span>
                  <span className="text-[0.9rem] font-semibold text-[var(--audio)]">
                    Save KSh 1,700
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="flex justify-center text-white text-[0.9rem] py-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </Link>
            <Link
              href="/shop"
              className="flex flex-col w-1/3 h-[35rem] shadow-xl rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Image src="/images/Necklace.webp" width={500} height={500} />
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                    AUDIO
                  </span>
                  <span className="p-1 bg-[var(--card-one-background)] text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
                    Oraimo
                  </span>
                </div>
                <p className="font-semibold text-[0.9rem]">
                  Oraimo FreePods 3C Wireless Earbuds
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">KSh 3,299</span>
                  <span className="text-[0.9rem] line-through text-[var(--muted-foreground)]">
                    KSh 4,999
                  </span>
                  <span className="text-[0.9rem] font-semibold text-[var(--audio)]">
                    Save KSh 1,700
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="flex justify-center text-white text-[0.9rem] py-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </Link>
          </div>
          <div className="flex w-full gap-4">
            <Link
              href="/shop"
              className="flex flex-col w-1/3 h-[35rem] shadow-xl rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Image src="/images/Necklace.webp" width={500} height={500} />
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                    AUDIO
                  </span>
                  <span className="p-1 bg-[var(--card-one-background)] text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
                    Oraimo
                  </span>
                </div>
                <p className="font-semibold text-[0.9rem]">
                  Oraimo FreePods 3C Wireless Earbuds
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">KSh 3,299</span>
                  <span className="text-[0.9rem] line-through text-[var(--muted-foreground)]">
                    KSh 4,999
                  </span>
                  <span className="text-[0.9rem] font-semibold text-[var(--audio)]">
                    Save KSh 1,700
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="flex justify-center text-white text-[0.9rem] py-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </Link>
            <Link
              href="/shop"
              className="flex flex-col w-1/3 h-[35rem] shadow-xl rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Image src="/images/Necklace.webp" width={500} height={500} />
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                    AUDIO
                  </span>
                  <span className="p-1 bg-[var(--card-one-background)] text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
                    Oraimo
                  </span>
                </div>
                <p className="font-semibold text-[0.9rem]">
                  Oraimo FreePods 3C Wireless Earbuds
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">KSh 3,299</span>
                  <span className="text-[0.9rem] line-through text-[var(--muted-foreground)]">
                    KSh 4,999
                  </span>
                  <span className="text-[0.9rem] font-semibold text-[var(--audio)]">
                    Save KSh 1,700
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="flex justify-center text-white text-[0.9rem] py-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </Link>
            <Link
              href="/shop"
              className="flex flex-col w-1/3 h-[35rem] shadow-xl rounded-[0.5rem] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <Image src="/images/Necklace.webp" width={500} height={500} />
              </div>
              <div className="px-6 pb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)] text-[0.9rem]">
                    AUDIO
                  </span>
                  <span className="p-1 bg-[var(--card-one-background)] text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
                    Oraimo
                  </span>
                </div>
                <p className="font-semibold text-[0.9rem]">
                  Oraimo FreePods 3C Wireless Earbuds
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold">KSh 3,299</span>
                  <span className="text-[0.9rem] line-through text-[var(--muted-foreground)]">
                    KSh 4,999
                  </span>
                  <span className="text-[0.9rem] font-semibold text-[var(--audio)]">
                    Save KSh 1,700
                  </span>
                </div>
                <Link
                  href="/shop"
                  className="flex justify-center text-white text-[0.9rem] py-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </Link>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="/shop"
              className="px-8 py-2 font-semibold border rounded-[0.5rem] border-[var(--border)] hover:bg-[var(--border)] transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
