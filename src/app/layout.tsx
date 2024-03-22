import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { GlobalContextProvider } from "./Context/store";

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
      <body className={`${roboto.className} bg-[#FEFEFE]`}>
        <AppRouterCacheProvider>
          <GlobalContextProvider>
            {children}
          </GlobalContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
