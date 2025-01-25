import type { Metadata } from "next";
import "./styles/globals.css";
import { poppins, roboto } from "./assets/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head> */}
      <body className={`${roboto.className} ${poppins.className} antialiased`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
