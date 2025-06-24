"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SSOCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[var(--primary)]" />
    </div>
  );
};

export default SSOCallback;
