import type { Metadata } from "next";
import "./globals.css";
import { FavoritesProvider } from "@/components/favorites-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "夯榜 HangRank",
  description: "A clean internet consensus ranking platform for product discovery."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <FavoritesProvider>
            <Nav />
            {children}
          </FavoritesProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
