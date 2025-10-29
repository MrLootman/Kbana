import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kbana Bokit - Restaurant Caraïbéen",
  description:
    "Découvrez notre restaurant caraïbéen et savourez les meilleurs bokits maison, garnis de saveurs authentiques des îles. Sur place ou à emporter. Ambiance chaleureuse garantie !",
  openGraph: {
    title: "Kbana Bokit",
    description:
      "Découvrez notre restaurant caraïbéen et savourez les meilleurs bokits, garnis de saveurs authentiques des îles. Sur place ou à emporter. Ambiance chaleureuse garantie !",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant Kbana Bokit",
        type: "website",
      },
    ],
  },
  verification: {
    google: "b853iy102RzfqQdYjFxJXofkliMuILlTxayYr3grOlo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
