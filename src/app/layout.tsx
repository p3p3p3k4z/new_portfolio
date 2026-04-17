import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layout/Navbar';
import { Inter, Fira_Code } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: 'Mario Ramírez | Computer Engineer & Developer',
  description: 'Portafolio profesional de Mario Ramírez',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${firaCode.variable}`}>
      {/* CORRECCIÓN IMPORTANTE:
         Eliminamos 'bg-gruvbox-dark0' y 'text-gruvbox-light1'.
         Ahora el color lo controlan las variables CSS (--bg-page) de globals.css
      */}
      <body className="antialiased selection:bg-gruvbox-yellow-bright/30">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <Navbar />
            <main className="max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}