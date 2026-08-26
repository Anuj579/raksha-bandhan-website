import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata = {
  title: "Happy Raksha Bandhan!",
  description: "A little Raksha Bandhan surprise made with love.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nunito.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
