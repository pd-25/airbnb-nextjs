import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./__components/navbar/Navbar";
import LoginModal from "./__components/modals/LoginModal";
import SignUpModal from "./__components/modals/SignUpModal";
import TestModal from "./__components/modals/TestModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fastapi Next Airbnb",
  description:
    "This is clone of airbnb frontend is with Nextjs and for backend I use Fastapi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content =  (
    <p>The content goes here...</p>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>
        <LoginModal />
        <SignUpModal />
        <TestModal />
      </body>
    </html>
  );
}
