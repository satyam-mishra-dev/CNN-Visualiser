import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

const description =
  "Upload a WAV file and see what a convolutional neural network hears: top predictions across 50 everyday sounds, the mel spectrogram, the waveform and the feature maps of every ResNet layer.";

export const metadata: Metadata = {
  metadataBase: new URL("https://cnn-visualiser.vercel.app"),
  title: "CNN Audio Visualizer: see what a ResNet hears, layer by layer",
  description,
  keywords: ["CNN visualizer", "audio classification", "feature maps", "ResNet", "ESC-50", "mel spectrogram", "PyTorch"],
  authors: [{ name: "Satyam Mishra", url: "https://satyam-mishra-dev.tech/projects/cnn-visualiser" }],
  openGraph: { title: "CNN Audio Visualizer", description, type: "website", url: "/" },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
