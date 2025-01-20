import { Montserrat, Kaushan_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Montserrat({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const pacifico = Kaushan_Script({
  variable: "--font-kaushan",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home with Hina | Find Your Dream Home",
  description: "Discover your perfect home with expert guidance from Hina. Browse luxury properties, apartments, and houses for sale and rent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${pacifico.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}