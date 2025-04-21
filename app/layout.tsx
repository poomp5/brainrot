import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Italian Brainrot | bluecat.dev",
  description: "คุณคือ Italian Brainrot ตัวไหน",
  icons: {
    icon: "/bluecat.png",
    shortcut: "/bluecat.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
