import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Apex Bank",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white font-inter">
        <div className="flex min-h-screen w-full bg-muted/40">
          <Sidebar />
          <div className="flex flex-col w-full bg-[#F7F8F9] my-[12px] rounded-[24px] p-[15px] sm:px-[25px] md:p-[32px]">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
