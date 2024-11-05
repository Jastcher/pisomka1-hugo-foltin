// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import AuthProvider from "../components/AuthProvider";
import MyMenu from "@/components/MyMenu";

export const metadata: Metadata = {
  title: "pisomka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <div style={{ minHeight: '95vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
            <MyMenu/>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
