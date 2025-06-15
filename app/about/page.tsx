import React from "react";

const page = () => {
  const features = [
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Free shipping on orders over Ksh. 5,000 with 2-day delivery options",
    },
    {
      icon: "🔒",
      title: "Secure Shopping",
      desc: "Your data is protected with industry-standard encryption",
    },
    {
      icon: "💎",
      title: "Premium Quality",
      desc: "We only stock products from trusted, verified manufacturers",
    },
    {
      icon: "🛡️",
      title: "2-Year Warranty",
      desc: "Extended warranty coverage on all electronic products",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      desc: "Our customer service team is always here to help",
    },
    {
      icon: "💳",
      title: "Easy Returns",
      desc: "30-day hassle-free return policy on all purchases",
    },
  ];

  const stats = [
    { value: "500K+", label: "Happy Customers" },
    { value: "500+", label: "Products" },
    { value: "99%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div className="flex flex-col gap-10 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col bg-white lg:min-h-screen items-center">
        <div className="flex flex-col items-center py-10 lg:mt-16 lg:mb-32">
          <h1 className="text-[2.5rem] font-bold text-center">
            About Alphatech
          </h1>
          <p className="text-[var(--muted-foreground)] text-center">
            Your trusted partner in technology since 2020. We're passionate
            about bringing you the latest electronics at competitive prices with
            exceptional service.
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <h1 className="text-[1.7rem] text-center md:text-start font-bold">
              Our Mission
            </h1>
            <p className="text-[var(--muted-foreground)]">
              At Alphatech, we believe technology should enhance your life, not
              complicate it. That's why we carefully curate our product
              selection to include only the best electronics from trusted
              brands.
            </p>
            <p className="text-[var(--muted-foreground)]">
              From the latest smartphones to essential accessories, we're here
              to help you stay connected, productive, and entertained with
              products that deliver real value.
            </p>
          </div>
          <div className="flex py-8 items-center justify-center w-full md:w-1/2 text-[3rem] bg-[var(--card-one-background)] rounded-[1rem]">
            🎯
          </div>
        </div>
      </div>
      <div className="flex flex-col py:8 lg:py-10 gap-8 bg-white md:min-h-screen w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[1.7rem] font-bold text-center">
            Why Choose Alphatech?
          </h1>
          <p className="text-[var(--muted-foreground)]">
            We're committed to providing an exceptional shopping experience
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col px-6 pt-16 pb-6 items-center shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.3333%-1rem)]"
            >
              <span className="text-[2rem]" aria-label={item.title}>
                {item.icon}
              </span>
              <span className="text-[0.9rem] font-semibold">{item.title}</span>
              <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between pt-10 lg:px-16 text-center w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.5rem)]"
            >
              <h1 className="text-[1.8rem] text-[var(--primary)] font-semibold">
                {stat.value}
              </h1>
              <p className="text-[var(--muted-foreground)] text-[0.9rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
