"use client";

import { useClerk } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { LogOut } from "lucide-react";

const ProfilePage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const { signOut } = useClerk();
  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn)
    return <p className="text-center text-[var(--primary)]">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8 py-16">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-semibold">My Account</h1>
          <p className="text-[var(--muted-foreground)]">
            Manage your profile and account settings
          </p>
        </div>
        <button
          className="flex gap-4 bg-[var(--primary)] text-white h-fit px-4 py-2 rounded-[0.5rem] cursor-pointer hover:bg-blue-600 transition duration-300"
          onClick={handleSignOut}
        >
          <LogOut className="w-[1.3rem] h-[1.3rem]" />
          <span className="font-semibold text-[0.9rem]">Sign Out</span>
        </button>
      </div>
      <div className="flex flex-col gap-5 border border-[var(--border)] rounded-lg p-8 w-full">
        <div>
          <div className="flex">
            <User className="w-[1.3rem] h-[1.3rem]" />
            <span className="font-semibold">Profile Information</span>
          </div>
          <p className="text-[var(--muted-foreground)] text-[0.9rem]">
            Your personal information and contact details
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <h1 className="text-[var(--muted-foreground)] font-semibold text-[0.9rem]">
              First Name
            </h1>
            <p>{user.firstName || "N/A"}</p>
          </div>
          <div>
            <h1 className="text-[var(--muted-foreground)] font-semibold text-[0.9rem]">
              Last Name
            </h1>
            <p>{user.lastName || "N/A"}</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <Mail className="text-[var(--muted-foreground)] w-[1.3rem] h-[1.3rem]" />
            <h1 className="text-[var(--muted-foreground)] font-semibold text-[0.9rem]">
              Email
            </h1>
          </div>
          <p>{user.emailAddresses[0]?.emailAddress || "N/A"}</p>
        </div>
        <div>
          <div className="flex gap-2">
            <Phone className="text-[var(--muted-foreground)] w-[1.3rem] h-[1.3rem]" />
            <h1 className="text-[var(--muted-foreground)] font-semibold text-[0.9rem]">
              Phone
            </h1>
          </div>
          <p>{user.phoneNumbers[0]?.phoneNumber || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
