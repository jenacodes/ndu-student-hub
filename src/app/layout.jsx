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
    "Stay updated with news, events, sports, and opportunities at Niger Delta University.",
  openGraph: {
    title: "ndustudenthub - Your School Info Hub",
    description:
      "Stay updated with news, events, sports, and opportunities at Niger Delta University.",
    url: "https://ndustudenthub.com",
    siteName: "ndustudenthub",
    images: [
      {
        url: "https://ndustudenthub.com/preview.png",
        width: 1200,
        height: 630,
        alt: "ndustudenthub preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ndustudenthub - Your School Info Hub",
    description: "Stay updated with NDU news, events, sports, and more.",
    images: ["https://ndustudenthub.com/preview.png"],
  },
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
