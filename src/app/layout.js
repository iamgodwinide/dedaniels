import { Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  subsets: ["latin"], weight: [
    "300", "400", "500", "600", "700"
  ]
});

export const metadata = {
  title: "De Daniels Hotel And Suites",
  description: "Experience Comfort And Elegance",
  keywords: "De Daniels, Hotels, De, Daniels, Benin Hotels, Benin City",  // Optional, use relevant keywords
  openGraph: {
    title: "De Daniels Hotel and Suites",
    description: "Experience Comfort And Elegance",
    url: "https://dedanielshotel.com",  // Your website URL
    siteName: "De Daniels Hotel and Suites",
    images: [
      {
        url: "https://dedanielshotel.com/bg.jpg",  // OG image URL
        width: 800,
        height: 600,
        alt: "De Daniels Hotel and Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",  // Twitter card type
    title: "De Daniels Hotel and Suites",
    description: "Experience Comfort And Elegance",
    site: "@dedanielshotel_",
    creator: "@iampremiumbyte",
    images: ["https://dedanielshotel.com/bg.jpg"],  // Twitter image
  },
  robots: "index, follow",  // For search engines
  viewport: "width=device-width, initial-scale=1",  // Responsive design
  alternates: {
    canonical: "https://dedanielshotel.com",  // Canonical URL
    languages: {
      "en-US": "https://dedanielshotel.com/en",
      "fr-FR": "https://dedanielshotel.com/fr",  // If you support multiple languages
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
      <body className={cormorant.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
