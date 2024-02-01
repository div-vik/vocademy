import "./globals.css";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

export const metadata = {
  title: "vocademyy",
  description:
    "Unleash your true potential by learning life skills live with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
