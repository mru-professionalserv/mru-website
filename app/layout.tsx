import type { Metadata } from "next";
import "./globals.css";
 
export const metadata: Metadata = {
  title: "MRU | Accounting · Tax · Business",
  description: 
    "Accounting, tax, and business services for individuals, self-employed professionals, and small-businesses in the U.S. and Puerto Rico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">  
     <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
