import { Metadata } from "next";
import StreamVideoProvider from "../../../providers/StreamClientProvider";

export const metadata: Metadata = {
  title: "People's Meet",
  description: "Video Calling App for quick meet and solutions",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
