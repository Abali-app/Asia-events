import type { ReactNode } from "react";
import { fontArabic, fontLatin } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://asiaeventsgroup.live"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${fontArabic.variable} ${fontLatin.variable}`}>{children}</body>
    </html>
  );
}
