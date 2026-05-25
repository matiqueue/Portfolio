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

            {/* Large ambient blobs — stronger in light mode */}
            <div className="fixed top-0 left-1/4 w-[580px] h-[580px] bg-primary/15 dark:bg-primary/6 rounded-full blur-[130px] pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 w-[540px] h-[540px] bg-accent/12 dark:bg-accent/6 rounded-full blur-[130px] pointer-events-none" />

            {/* Mid-size accent blobs */}
            <div className="fixed top-1/3 right-0 w-80 h-80 bg-primary/10 dark:bg-primary/4 rounded-full blur-[90px] pointer-events-none" />
            <div className="fixed bottom-1/3 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/4 rounded-full blur-[85px] pointer-events-none" />
            <div className="fixed top-2/3 left-1/3 w-64 h-64 bg-primary/8 dark:bg-primary/3 rounded-full blur-[75px] pointer-events-none" />

            {/* Small pinpoint glows */}
            <div className="fixed top-[15%] right-[20%] w-32 h-32 bg-primary/18 dark:bg-primary/8 rounded-full blur-[50px] pointer-events-none" />
            <div className="fixed top-[60%] left-[15%] w-28 h-28 bg-accent/16 dark:bg-accent/8 rounded-full blur-[40px] pointer-events-none" />
            <div className="fixed top-[40%] right-[10%] w-20 h-20 bg-primary/14 dark:bg-primary/6 rounded-full blur-[35px] pointer-events-none" />
            <div className="fixed bottom-[20%] left-[40%] w-20 h-20 bg-accent/14 dark:bg-accent/6 rounded-full blur-[35px] pointer-events-none" />
            <div className="fixed top-[80%] right-[35%] w-24 h-24 bg-primary/12 dark:bg-primary/4 rounded-full blur-[45px] pointer-events-none" />

            {/* Dot-grid overlay — more visible in light mode */}
            <div
              className="fixed inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.015]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* Diagonal lines — more visible in light mode */}
            <div
              className="fixed inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.02]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 1px, transparent 1px, transparent 72px)",
              }}
            />

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
