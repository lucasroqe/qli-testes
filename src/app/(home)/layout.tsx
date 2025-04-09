import Header from "@/components/home/Header";
import "../globals.css";
import Footer from "@/components/home/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header/>
        {children}
     <Footer/>
    </>
  );
}
