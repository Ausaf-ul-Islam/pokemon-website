import React from "react";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata = {
  title: "Pokemon's",
  description:
    " A simple Pokemon API using React and TypeScript built by ausaf-ul-islam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
