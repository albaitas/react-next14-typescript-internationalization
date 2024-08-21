import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['lt', 'en'],
   defaultLocale: 'lt'
});
 
export const config = {
  matcher: ['/', '/(lt|en)/:path*']
};