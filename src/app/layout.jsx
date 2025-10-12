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
  metadataBase: new URL("https://ndustudenthub.com"),
  title: {
    default: "NDU Student Hub",
    template: "%s | NDU Student Hub",
  },
  description:
    "Stay informed with events, news, and campus life updates from Niger Delta University.",
  openGraph: {
    title: "NDU Student Hub",
    description:
      "Explore the latest happenings, stories, articles, events and opportunities at Niger Delta University.",
    url: "https://ndustudenthub.com",
    siteName: "NDU Student Hub",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "NDU Student Hub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NDU Student Hub",
    description: "Your go-to source for NDU news, events, and updates.",
    images: ["/images/logo.jpg"],
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
