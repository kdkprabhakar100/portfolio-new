import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prabhakar Khadka — Full-Stack Developer & IT Engineer",
  description:
    "Portfolio of Prabhakar Khadka, a full-stack developer and IT engineer creating web products, digital systems and interactive experiences.",
  metadataBase: new URL("https://www.khadkaprabhakar.com.np"),
  openGraph: {
    title: "Prabhakar Khadka — Portfolio",
    description: "Full-stack development, IT engineering and creative technology.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
