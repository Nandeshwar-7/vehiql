import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehiql",
  description: "Find your dream vehicle",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="bg-blue-50 py-12">
            <div className="container text-center text-gray-600 mx-auto px-4">
              <p>Made by Team Kanyaraasi</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
