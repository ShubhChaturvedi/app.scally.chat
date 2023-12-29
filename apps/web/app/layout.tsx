import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {SocketProvider} from "../context/socketProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "app.scally.chat",
  description: "A chat app for Scalable Chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <SocketProvider>
        <body style={{height: "100vh"}} className={inter.className}>{children}</body>
      </SocketProvider>
    </html>
  );
}
