//@ts-ignore
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import { Footer } from "@/components/shared/Footer/Footer";
import MainLayout from "./Home/MainLayout";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
        <title>UzChess</title>
        <meta name="description" content="Shahmat" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={'flex flex-col justify-between antialiased overflow-x-clip select-none'}>
        <MainLayout children={children}/>
      </body>
    </html>
  );
}
