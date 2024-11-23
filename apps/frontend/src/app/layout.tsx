import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../contexts/sidebar";
import Sidebar from "../components/Sidebar";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Elevate",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <SidebarProvider>
          <Navbar />
          <div className="h-[calc(100vh-80px)] flex">
            <Sidebar />
            <div className="bg-purple-100/40 w-full h-[calc(100vh-80px)] overflow-auto">
              <div className="max-w-screen-xl mx-auto w-full py-10">
                {children}
              </div>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
