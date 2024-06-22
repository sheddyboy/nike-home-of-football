import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FormProvider from "@/context/form/FormProvider";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};
const helveticaFont = localFont({
  src: [
    {
      path: "../../public/fonts/helvetica-neue-bold.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/helvetica-neue-regular.otf",
      weight: "400",
    },
  ],
  variable: "--helvetica",
});

const futura = localFont({
  src: "../../public/fonts/futura-std-extra-bold-condensed.otf",
  weight: "700",
  variable: "--futura",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${futura.variable} ${helveticaFont.variable} overflow-clip bg-[url("/background.jpg")] bg-cover bg-no-repeat`}
      >
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
