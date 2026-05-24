import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { websiteMetadata } from "@/lib/data";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: websiteMetadata.title,
  description: websiteMetadata.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            {/* Background effects */}
            <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-[0.02] pointer-events-none" />
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
