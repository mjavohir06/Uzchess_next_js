//@ts-ignore
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import { Footer } from "@/components/shared/Footer/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <title>UzChess</title>
        <meta name="description" content="Shahmat" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={'flex flex-col justify-between antialiased overflow-x-clip select-none'}>
        <Header />
        <main className="grid grow px-8 mb-12 items-start content-start">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
