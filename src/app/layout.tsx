import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITOT",
  description:
    "Empowering businesses with cutting-edge IT solutions and result-driven digital marketing strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ITOT</title>
        <meta
          name="title"
          content="Smart Solutions. Seamless Connections. Boundless Future."
        />
        <meta
          name="description"
          content="We create smart&#44; integrated solutions&#44; connecting your business to the digital future."
        />
        <meta
          name="keywords"
          content="IT services, OT services, digital marketing services, seo engine optimization, facebook advertising management, seo performance marketing, google adwords advertising, smm marketing, search optimization services"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" href="/images/logo/logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <MainLayout>{children}</MainLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
