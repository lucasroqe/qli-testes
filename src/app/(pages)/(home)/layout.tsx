import Header from "@/components/home/Header";
import "@/app/globals.css";
import Footer from "@/components/home/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
