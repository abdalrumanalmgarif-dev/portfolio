
import Nav from "../components/Nav";
import Foot from "@/components/Foot";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LangProvider } from "@/context/LangContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    
    <html
      lang="en"
      className={``}
    >
      <body className="" >
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
    
    </>
  );
}
