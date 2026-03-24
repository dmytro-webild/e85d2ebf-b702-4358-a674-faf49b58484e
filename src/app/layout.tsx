import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'DIEGO GALVEZ AYUSO LIMITED - Architectural Design & Planning London',
  description: 'Expert residential architectural design and planning services in London for home extensions, loft conversions, and property developments. Clean, modern, professional studio.',
  keywords: ["London architect, residential architectural design, home extensions London, loft conversions London, planning permission UK, property developers, architectural studio, Diego Galvez Ayuso"],
  openGraph: {
    "title": "DIEGO GALVEZ AYUSO LIMITED - Architectural Design & Planning London",
    "description": "Expert residential architectural design and planning services in London for home extensions, loft conversions, and property developments. Clean, modern, professional studio.",
    "url": "https://www.diegogalvezayuso.co.uk",
    "siteName": "DIEGO GALVEZ AYUSO LIMITED",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-shot-apartment-with-different-color-doors-daytime_181624-10553.jpg",
        "alt": "Modern London house exterior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "DIEGO GALVEZ AYUSO LIMITED - Architectural Design & Planning London",
    "description": "Expert residential architectural design and planning services in London for home extensions, loft conversions, and property developments. Clean, modern, professional studio.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-shot-apartment-with-different-color-doors-daytime_181624-10553.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
