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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="relative min-h-screen">
            {/* ── Background decorative layer ── */}

            {/* Large ambient blobs */}
            <div className="fixed top-0 left-1/4 w-[520px] h-[520px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 w-[480px] h-[480px] bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

            {/* Mid-size accent blobs */}
            <div className="fixed top-1/3 right-0 w-72 h-72 bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
            <div className="fixed bottom-1/3 left-0 w-64 h-64 bg-accent/4 rounded-full blur-[90px] pointer-events-none" />
            <div className="fixed top-2/3 left-1/3 w-56 h-56 bg-primary/3 rounded-full blur-[80px] pointer-events-none" />

            {/* Small pinpoint glows */}
            <div className="fixed top-[15%] right-[20%] w-24 h-24 bg-primary/8 rounded-full blur-[50px] pointer-events-none" />
            <div className="fixed top-[60%] left-[15%] w-20 h-20 bg-accent/8 rounded-full blur-[40px] pointer-events-none" />
            <div className="fixed top-[40%] right-[10%] w-16 h-16 bg-primary/6 rounded-full blur-[35px] pointer-events-none" />
            <div className="fixed bottom-[20%] left-[40%] w-16 h-16 bg-accent/6 rounded-full blur-[35px] pointer-events-none" />

            {/* Subtle dot-grid overlay — light mode only */}
            <div
              className="fixed inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.015]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Thin diagonal lines — very faint structural texture */}
            <div
              className="fixed inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.02]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 80px)",
              }}
            />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
