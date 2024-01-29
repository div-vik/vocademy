import "./globals.css";

export const metadata = {
  title: "Vocademy",
  description:
    "Unleash your true potential by learning life skills live with us.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
