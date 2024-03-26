import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { GlobalContextProvider } from "./Context/store";
import Navbar from "@/components/main/Navbar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Weatherly",
  description: "Chaindots Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#FEFEFE] overflow-x-hidden sm:overflow-y-hidden`}>
        <AppRouterCacheProvider>
          <GlobalContextProvider>
            <Navbar></Navbar>
            <div className="pt-8">
              {children}
            </div>
          </GlobalContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
