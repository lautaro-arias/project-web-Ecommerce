import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web 1.0",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>)
  
{
 
  
  return (
    <html lang="en" >
      <body className="dark">
        {children}
      </body>
    </html>
  );
}
