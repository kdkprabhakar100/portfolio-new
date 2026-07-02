import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prabhakar Khadka — Full-Stack Developer",
  description:
    "Portfolio of Prabhakar Khadka, a full-stack developer and IT engineer building modern digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
