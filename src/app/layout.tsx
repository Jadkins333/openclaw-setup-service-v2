import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next"; // disabled for GH Pages deploy
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenClaw Setup Kit",
  description: "A practical setup kit for getting OpenClaw running without drowning in docs.",
  openGraph: {
    title: "OpenClaw Setup Kit",
    description: "A practical setup kit for getting OpenClaw running without drowning in docs.",
    url: "https://jadkins333.github.io/openclaw-setup-service-v2",
    siteName: "OpenClaw Setup Kit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Setup Kit",
    description: "A practical setup kit for getting OpenClaw running without drowning in docs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script defer data-domain="jadkins333.github.io" src="https://plausible.io/js/script.js" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
