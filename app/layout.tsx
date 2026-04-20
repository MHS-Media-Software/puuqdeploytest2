import "./globals.css";
import TopBar from "../components/TopBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import SideCta from "../components/SideCta";

export const metadata = {
  title: "MHS Media - Digitale Marketing & Webdesign Expert Amsterdam",
  description: "MHS Media helpt bedrijven groeien met professionele websites, effectieve SEO en bewezen marketingstrategieën. 8+ jaar ervaring, 200+ succesvolle projecten.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <TopBar />
        <Nav />
        {children}
        <CtaSection />
        <Footer />
        <FloatingWhatsapp />
        <SideCta />
      </body>
    </html>
  );
}
