import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LabelLab — Verify the label",
  description: "Barcode and QR label compliance checks for India."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
