import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/app/ThemeProvider';
//import Header from '@/app/components/Header';
//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const DynamicHeader = dynamic(() => import('@/app/components/Header'), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='bg-background'>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DynamicHeader />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
