import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#102B50",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zentararealty.property"),
  title: "Zentara Realty | New Residential Projects in Gurgaon",
  description:
    "Discover pre-launch and newly launched residential projects in Gurgaon with Zentara Realty. Explore new residential developments and opportunities in Gurugram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#F7F8FA] text-[#202938] antialiased selection:bg-[#C5A46D]/20 selection:text-[#102B50]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
