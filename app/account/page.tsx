import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-white w-full flex flex-col justify-center items-center py-16">
        <div>
          <h1 className="text-[2rem] font-bold">Welcome to Alphatech</h1>
          <p className="text-[var(--muted-foreground)]">
            Sign in to your account or create a new one
          </p>
        </div>
        <div className="w-[28rem] border border-[var(--input)]">
          <div>
            <h1>Account Access</h1>
          </div>
          <div>
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <p>Forgot Password?</p>
            <button type="submit">Sign In</button>
          </div>
          <div>
            <p>OR CONTINUE WITH</p>
            <button type="button">Continue with Google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
