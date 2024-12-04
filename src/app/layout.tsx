import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


const geistRoboto = localFont({
  src: "./fonts/GeistRoboto.ttf",
  variable: "--font-geist-roboto",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Whitepace | Your Project Manager",
  description: "whitepace is a project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistRoboto.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
