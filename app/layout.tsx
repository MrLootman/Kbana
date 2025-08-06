import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kbana Bokit",
  description: "Découvrez notre restaurant caraïbéen et savourez les meilleurs bokits maison, garnis de saveurs authentiques des îles. Ambiance chaleureuse garantie !",
  openGraph: {
    title: "Kbana Bokit",
    description: "Découvrez notre restaurant caraïbéen et savourez les meilleurs bokits maison, garnis de saveurs authentiques des îles. Ambiance chaleureuse garantie !",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
