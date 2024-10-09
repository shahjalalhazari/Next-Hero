import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({weight: ["400", "500", "700"], subsets: ["latin"]})

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero"  // %s will be consider as dynamic place.
  },
  description: "Super Powerful web app created with Next Js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`antialiased ${roboto.className}`}
      >
        <Navbar/>
        {children}
        <footer className="text-center bg-red-400 py-2 text-white">2024 Next Hero developed by Shahjalal Hazari</footer>
      </body>
    </html>
  );
}
