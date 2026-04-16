import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BuyRobot — Search 4,200+ Robots & Drones from 1,800 Manufacturers",
    template: "%s | BuyRobot",
  },
  description:
    "Find the right robot for your operation. Filter by type, specs, price, and certifications. Compare side by side. Request quotes directly.",
  metadataBase: new URL("https://buyrobot.land"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buyrobot.land",
    siteName: "BuyRobot",
    title: "BuyRobot — Every Robot, One Search",
    description:
      "Search 4,200+ robots and drones from 1,800 manufacturers worldwide.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
