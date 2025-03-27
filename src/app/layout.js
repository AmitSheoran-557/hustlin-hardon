import "./globals.css";

export const metadata = {
  title: "Hustlin Hardos",
  description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022",
  openGraph: {
    title: "Hustlin Hardos",
    description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Hustlin Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hustlin Hardos",
    description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022",
    images: ["/meta-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1229.0" data-gr-ext-installed="">
        {children}
      </body>
    </html>
  );
}
