import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Star } from "lucide-react";

function ProductCard({
  imageUrl,
  category,
  brand,
  name,
  currentPrice,
  oldPrice,
  savings,
  rating,
  reviews,
}: {
  imageUrl: any;
  category: any;
  brand: any;
  name: any;
  currentPrice: any;
  oldPrice: any;
  savings: any;
  rating: any;
  reviews: any;
}) {
  return (
    <Link
      href="/shop"
      className="flex flex-col w-full shadow-lg rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.5rem)] lg:w-[calc(33.333%-1rem)]"
    >
      <div>
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt={name}
          className="w-full h-auto object-cover rounded-t-[0.5rem]"
        />
      </div>
      <div className="p-4 md:p-6 flex flex-col gap-2 flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-[var(--muted-foreground)] text-sm md:text-[0.9rem] uppercase">
            {category}
          </span>
          <span className="p-1 bg-[var(--card-one-background)] text-xs md:text-[0.8rem] text-[var(--primary)] font-semibold rounded-[0.3rem]">
            {brand}
          </span>
        </div>
        <p className="font-semibold text-base md:text-[0.9rem] flex-grow">
          {name}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[var(--muted-foreground)]">
            {rating} ({reviews})
          </span>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <span className="font-bold text-lg md:text-base">
            KSh {currentPrice.toLocaleString()}
          </span>
          {oldPrice && (
            <span className="text-sm md:text-[0.9rem] line-through text-[var(--muted-foreground)]">
              KSh {oldPrice.toLocaleString()}
            </span>
          )}
          {savings && (
            <span className="text-sm md:text-[0.9rem] font-semibold text-[var(--audio)]">
              Save KSh {savings.toLocaleString()}
            </span>
          )}
        </div>
        <button className="flex justify-center text-white text-sm md:text-[0.9rem] py-2 mt-2 rounded-[0.5rem] font-semibold bg-[var(--primary)] hover:bg-blue-600 transition duration-300 w-full">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

function CategoryCard({
  href,
  bgColor,
  icon,
  title,
  productCount,
}: {
  href: any;
  bgColor: any;
  icon: any;
  title: any;
  productCount: any;
}) {
  return (
    <Link
      href="/shop"
      className="flex flex-col p-4 md:px-6 md:pt-8 md:pb-6 items-center justify-between shadow-lg h-[12rem] md:h-[14.25rem] w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.5rem)] xl:w-[calc(25%-1rem)] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
    >
      <div
        className={`flex items-center justify-center w-12 h-12 md:w-[3.5rem] md:h-[3.5rem] ${bgColor} rounded-[50vw] text-2xl md:text-3xl`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-1 md:gap-2 items-center mt-2">
        <span className="text-base md:text-[0.9rem] font-semibold">
          {title}
        </span>
        <span className="text-[var(--muted-foreground)] text-sm md:text-[0.8rem]">
          {productCount} Products
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const trendingProducts = [
    {
      imageUrl: "/images/Necklace.webp",
      category: "AUDIO",
      brand: "Oraimo",
      name: "Oraimo FreePods 3C Wireless Earbuds",
      currentPrice: 3299,
      oldPrice: 4999,
      savings: 1700,
      rating: 4.8,
      reviews: 1243,
    },
    {
      imageUrl: "/images/Necklace.webp", // Replace with actual image for product 2
      category: "AUDIO",
      brand: "Oraimo",
      name: "Oraimo FreePods 3C Wireless Earbuds", // Replace with actual product name
      currentPrice: 3299,
      oldPrice: 4999,
      savings: 1700,
      rating: 4.8,
      reviews: 1243,
    },
    {
      imageUrl: "/images/Necklace.webp", // Replace with actual image for product 3
      category: "AUDIO",
      brand: "Oraimo",
      name: "Oraimo FreePods 3C Wireless Earbuds", // Replace with actual product name
      currentPrice: 3299,
      oldPrice: 4999,
      savings: 1700,
      rating: 4.8,
      reviews: 1243,
    },
    {
      imageUrl: "/images/Necklace.webp", // Replace with actual image for product 4
      category: "AUDIO",
      brand: "Oraimo",
      name: "Oraimo FreePods 3C Wireless Earbuds", // Replace with actual product name
      currentPrice: 3299,
      oldPrice: 4999,
      savings: 1700,
      rating: 4.8,
      reviews: 1243,
    },
    {
      imageUrl: "/images/Necklace.webp", // Replace with actual image for product 5
      category: "AUDIO",
      brand: "Oraimo",
      name: "Oraimo FreePods 3C Wireless Earbuds", // Replace with actual product name
      currentPrice: 3299,
      oldPrice: 4999,
      savings: 1700,
      rating: 4.8,
      reviews: 1243,
    },
    {
      imageUrl: "/images/Necklace.webp", // Replace with actual image for product 6
      category: "AUDIO",
      brand: "Oraimo",
      name: "Oraimo FreePods 3C Wireless Earbuds", // Replace with actual product name
      currentPrice: 3299,
      oldPrice: 4999,
      savings: 1700,
      rating: 4.8,
      reviews: 1243,
    },
  ];

  const shopByCategoryData = [
    {
      href: "",
      bgColor: "bg-[var(--smartphones)]",
      icon: "📱",
      title: "Smartphones",
      productCount: "50+",
    },
    {
      href: "",
      bgColor: "bg-[var(--laptops)]",
      icon: "💻",
      title: "Laptops",
      productCount: "30+",
    },
    {
      href: "",
      bgColor: "bg-[var(--audio)]",
      icon: "🎧",
      title: "Audio",
      productCount: "40+",
    },
    {
      href: "",
      bgColor: "bg-[var(--accessories)]",
      icon: "🔌",
      title: "Accessories",
      productCount: "80+",
    },
    {
      href: "",
      bgColor: "bg-[var(--storage)]",
      icon: "💾",
      title: "Storage",
      productCount: "25+",
    },
    {
      href: "",
      bgColor: "bg-[var(--gaming)]",
      icon: "🎮",
      title: "Gaming",
      productCount: "35+",
    },
    {
      href: "",
      bgColor: "bg-[var(--smarthome)]",
      icon: "🏠",
      title: "Smart Home",
      productCount: "20+",
    },
    {
      href: "",
      bgColor: "bg-[var(--wearables)]",
      icon: "⌚",
      title: "Wearables",
      productCount: "15+",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row w-full bg-white px-4 md:px-8 lg:px-[10rem] h-auto lg:min-h-screen items-center py-10 lg:py-0">
        <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <p className="flex flex-col text-3xl md:text-5xl lg:text-[3.75rem] text-[var(--primary)] font-bold leading-tight">
            Latest Tech, <span className="text-black">Delivered Fast</span>
          </p>
          <p className="text-[var(--muted-foreground)] text-sm md:text-base">
            Discover premium electronics from top brands. From cutting-edge
            smartphones to powerful laptops, we've got everything you need to
            stay connected and productive.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <Link
              href="/shop"
              className="flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-blue-600 transition duration-300 text-sm md:text-base"
            >
              Shop Now
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
            <Link
              href="/about"
              className="px-4 md:px-6 py-2 border rounded-lg border-[var(--border)] hover:bg-[var(--border)] transition duration-300 text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] shadow-lg rounded-[0.5rem]
            p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-one-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-one-foreground)] rounded-[50vw] text-2xl">
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
              className="flex flex-col gap-4 h-[14.25rem] w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] shadow-lg mt-4 rounded-[0.5rem]
            p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-two-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-two-foreground)] rounded-[50vw] text-2xl">
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
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div
              className="flex flex-col gap-4 h-[14.25rem] w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] shadow-lg rounded-[0.5rem]
            p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-three-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-three-foreground)] rounded-[50vw] text-2xl">
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
              className="flex flex-col gap-4 h-[14.25rem] w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.5rem)] shadow-lg mt-4 rounded-[0.5rem]
            p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-[var(--card-four-background)] h-2/3 rounded-[0.5rem]">
                <div className="flex items-center justify-center w-[3.5rem] h-[3.5rem] bg-[var(--card-four-foreground)] rounded-[50vw] text-2xl">
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

      {/* Info Bar */}
      <div className="flex items-center justify-center bg-[var(--primary)] h-12 md:h-[2.75rem] text-white px-4 text-center">
        <p className="text-sm md:text-[0.9rem]">
          🎉 Free shipping on orders over KSh 5,000 | 30-day return policy |
          2-year warranty
        </p>
      </div>

      {/* Shop by Category Section */}
      <div className="flex flex-col gap-6 md:gap-8 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center w-full mt-8 md:mt-[4rem] text-center">
          <h1 className="text-2xl md:text-[2rem] font-bold">
            Shop by Category
          </h1>
          <p className="text-[var(--muted-foreground)] text-sm md:text-base max-w-2xl">
            Find exactly what you&apos;re looking for in our organized product
            categories
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          {shopByCategoryData.map((category, index) => (
            <CategoryCard
              key={index}
              href={category.href}
              bgColor={category.bgColor}
              icon={category.icon}
              title={category.title}
              productCount={category.productCount}
            />
          ))}
        </div>
      </div>

      {/* Trending Products Section */}
      <div className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center w-full text-center">
          <h1 className="text-2xl md:text-[2rem] font-bold">
            Trending Products
          </h1>
          <p className="text-[var(--muted-foreground)] text-sm md:text-base max-w-2xl">
            Discover our most popular electronics from trusted brands like
            Oraimo, Samsung, and Punex
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          {trendingProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageUrl={product.imageUrl}
              category={product.category}
              brand={product.brand}
              name={product.name}
              currentPrice={product.currentPrice}
              oldPrice={product.oldPrice}
              savings={product.savings}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-4 md:mt-8">
          <Link
            href="/shop"
            className="px-6 md:px-8 py-2 font-semibold border rounded-lg border-[var(--border)] hover:bg-[var(--border)] transition duration-300 text-sm md:text-base"
          >
            View All Products
          </Link>
        </div>
      </div>
    </>
  );
}
