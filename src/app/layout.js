import "./globals.css";

export const metadata = {
  title: "Hustlin Hardos",
  description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022",
  openGraph: {
    title: "Hustlin Hardos",
    description: "BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022 ",
    images: [
      {
        url: "/ meta-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  data-new-gr-c-s-check-loaded="14.1228.0" data-gr-ext-installed="">
        {children}
      </body>
    </html>
  );
}
