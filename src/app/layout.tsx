import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeFoTech",
  description: "Best Software Development Company",
  icons: {
    icon: "/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
