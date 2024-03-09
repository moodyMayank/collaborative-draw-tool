"use client";

// Clerk
import { ClerkProvider, useAuth } from "@clerk/nextjs";
// Convex - clerk
import { ConvexProviderWithClerk } from "convex/react-clerk";
// Convex
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loader } from "@/components/auth/Loader";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// The ! is there so that , variable is never undefinded
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
            <Loader />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
