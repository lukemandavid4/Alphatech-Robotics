import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-white px-[10rem] h-screen items-center">
        <div className="flex flex-col items-center mt-16 mb-32">
          <h1 className="text-[2.5rem] font-bold">About Alphatech</h1>
          <p className="text-[var(--muted-foreground)] text-center">
            Your trusted partner in technology since 2020. We're passionate
            about bringing you the latest electronics at competitive prices with
            exceptional service.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-6 w-1/2">
            <h1 className="text-[1.7rem] font-bold">Our Mission</h1>
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
          <div className="flex items-center justify-center w-1/2 text-[3rem] bg-[var(--card-one-background)] rounded-[1rem]">
            🎯
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[10rem] py-12 gap-8 bg-white h-screen w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-[1.7rem] font-bold">Why Choose Alphatech?</h1>
          <p className="text-[var(--muted-foreground)]">
            We're committed to providing an exceptional shopping experience
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <div
            className="flex flex-col px-6 pt-16 pb-6 items-center justify-between shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ flexBasis: "calc(33.333% - 16px)" }}
          >
            <span className="text-[2rem]">🚚</span>
            <span className="text-[0.9rem] font-semibold">Fast Delivery</span>
            <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
              Free shipping on orders over $50 with 2-day delivery options
            </span>
          </div>
          <div
            className="flex flex-col px-6 pt-16 pb-6 items-center justify-between shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ flexBasis: "calc(33.333% - 16px)" }}
          >
            <span className="text-[2rem]">🔒</span>
            <span className="text-[0.9rem] font-semibold">Secure Shopping</span>
            <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
              Your data is protected with industry-standard encryption
            </span>
          </div>
          <div
            className="flex flex-col px-6 pt-16 pb-6 items-center justify-between shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ flexBasis: "calc(33.333% - 16px)" }}
          >
            <span className="text-[2rem]">💎</span>
            <span className="text-[0.9rem] font-semibold">Premium Quality</span>
            <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
              We only stock products from trusted, verified manufacturers
            </span>
          </div>
          <div
            className="flex flex-col px-6 pt-16 pb-6 items-center justify-between shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ flexBasis: "calc(33.333% - 16px)" }}
          >
            <span className="text-[2rem]">🛡️</span>
            <span className="text-[0.9rem] font-semibold">2-Year Warranty</span>
            <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
              Extended warranty coverage on all electronic products
            </span>
          </div>
          <div
            className="flex flex-col px-6 pt-16 pb-6 items-center justify-between shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ flexBasis: "calc(33.333% - 16px)" }}
          >
            <span className="text-[2rem]">📞</span>
            <span className="text-[0.9rem] font-semibold">24/7 Support</span>
            <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
              Our customer service team is always here to help
            </span>
          </div>
          <div
            className="flex flex-col px-6 pt-16 pb-6 items-center justify-between shadow-lg h-[14.25rem] rounded-[0.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            style={{ flexBasis: "calc(33.333% - 16px)" }}
          >
            <span className="text-[2rem]">💳</span>
            <span className="text-[0.9rem] font-semibold">Easy Returns</span>
            <span className="text-[0.9rem] text-[var(--muted-foreground)] text-center">
              30-day hassle-free return policy on all purchases
            </span>
          </div>
        </div>
        <div className="flex justify-between px-16 text-center">
          <div>
            <h1 className="text-[1.8rem] text-[var(--primary)] font-semibold">
              500K+
            </h1>
            <p className="text-[var(--muted-foreground)] text-[0.9rem]">
              Happy Customers
            </p>
          </div>
          <div>
            <h1 className="text-[1.8rem] text-[var(--primary)] font-semibold">
              500+
            </h1>
            <p className="text-[var(--muted-foreground)] text-[0.9rem]">
              Products
            </p>
          </div>
          <div>
            <h1 className="text-[1.8rem] text-[var(--primary)] font-semibold">
              99%
            </h1>
            <p className="text-[var(--muted-foreground)] text-[0.9rem]">
              Satisfaction Rate
            </p>
          </div>
          <div>
            <h1 className="text-[1.8rem] text-[var(--primary)] font-semibold">
              24/7
            </h1>
            <p className="text-[var(--muted-foreground)] text-[0.9rem]">
              Support
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
