import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // Unwrapping params for Next.js 15
  const { locale } = await params;
  
  // Loading dictionaries
  const messages = await getMessages();
 
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-gruvbox-dark0 text-gruvbox-light1 antialiased selection:bg-gruvbox-yellow-bright/30">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen">
            {/* Aquí irá el Navbar después */}
            <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-8 w-full">
              {children}
            </main>
            {/* Aquí irá el Footer después */}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}