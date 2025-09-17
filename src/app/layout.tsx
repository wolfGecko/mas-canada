import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mas Wrestling Canada",
  description: "Official website of Mas Wrestling Canada - Promoting and developing the sport of Mas Wrestling across Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
