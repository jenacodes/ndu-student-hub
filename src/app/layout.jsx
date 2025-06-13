import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "ndustudenthub - Your School Info Hub",
  description:
    "Your go-to source for all the latest news, events, and happenings at your school.",
  keywords:
    "school news, student events, university updates, campus life, student hub, school announcements, academic news, extracurricular activities, ndu, Niger Delta University, student portal, student resources, school community, student life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
