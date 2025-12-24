import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layout/Navbar';
import "./globals.css";

export const metadata = {
  title: 'Mario Ramírez | Software Engineer',
  description: 'Portafolio profesional de Mario Ramírez',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gruvbox-dark0 text-gruvbox-light1 antialiased selection:bg-gruvbox-yellow-bright/30">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            <Navbar />
            {/* El contenido principal con el espaciado correcto para la Navbar fija */}
            <main className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}