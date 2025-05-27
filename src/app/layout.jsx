import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Load Montserrat font with specific weights and a custom CSS variable
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // You can add more weights as needed
  variable: "--font-montserrat",
});

export const metadata = {
  title: "ndustudenthub - Your School Info Hub",
  description:
    "Your go-to source for all the latest news, events, and happenings at your school.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={` font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
