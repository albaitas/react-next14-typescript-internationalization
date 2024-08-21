import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '../components/header';
import Footer from '../components/footer';
import { LocalLayoutProps, GenerateProps } from '../../types';
import '../globals.css';

export async function generateMetadata({ params }: GenerateProps) {
  const { locale } = params;
  const metadata = {
    title: locale === 'en' ? 'Home - Next.js App' : 'Pradžia - Next.js Aplikacija',
    description: locale === 'en' ? 'Welcome to the Next.js Internationalization website!' : 'Sveiki atvykę į Next.js internacionalizavimo svetainę!',
    openGraph: {
      title: locale === 'en' ? 'Home - Next.js App' : 'Pradžia - Next.js Aplikacija',
      description: locale === 'en' ? 'Welcome to the Next.js Internationalization website!' : 'Sveiki atvykę į Next.js internacionalizavimo svetainę!',
      url: locale === 'lt' ? `${process.env.BASE_URL}/lt/rooms` : `${process.env.BASE_URL}/en/rooms`
    }
  };

  return metadata;
}

export default async function LocaleLayout({ children, params }: Readonly<LocalLayoutProps>) {
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name='description' content={locale === 'en' ? 'Welcome to the Next.js Internationalization website!' : 'Sveiki atvykę į Next.js internacionalizavimo svetainę!'} />
        <meta property='og:title' content={locale === 'en' ? 'Home - Next.js App' : 'Pradžia - Next.js Aplikacija'} />
        <meta
          property='og:description'
          content={locale === 'en' ? 'Welcome to the Next.js Internationalization website!' : 'Sveiki atvykę į Next.js internacionalizavimo svetainę!'}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
