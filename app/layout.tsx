import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const rubik = Rubik ({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: "Personal website",
  description: "Modern profile website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
