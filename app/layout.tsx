import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/sidebar";
import SupabaseProvider from "@/components/providers/supabase-provider";
import UserProvider from "@/components/providers/user-provider";
import ModalProvider from "@/components/providers/modal-provider";

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
    <SupabaseProvider>
     <UserProvider>
      <ModalProvider />
      <div className="h-full flex p-2 gap-2">
       <Sidebar />
       <main className="h-full flex-1 overflow-y-auto">{children}</main>
      </div>
     </UserProvider>
    </SupabaseProvider>
   </body>
  </html>
 );
}
