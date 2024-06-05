import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Spotify Clone"
};

export default function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={font.className}>
    <div className="h-full flex p-2 gap-2">
     <Sidebar />
     <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
   </body>
  </html>
 );
}
