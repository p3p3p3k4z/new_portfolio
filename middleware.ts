import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always'
});
 
export const config = {
  // Esta expresión regular ignora archivos con extensiones (favicon, imágenes, robots.txt, etc.)
  // y las carpetas internas de Next.js (_next, api)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};