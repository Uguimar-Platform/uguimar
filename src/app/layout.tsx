import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#E7F1FF]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
