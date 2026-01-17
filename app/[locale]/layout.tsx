import { getMessages, setRequestLocale } from 'next-intl/server';
import { ClientProviders } from '../providers';
import { Suspense } from 'react';


// 必须 export
export function generateStaticParams() {
  return [
    { locale: 'zh' },
    { locale: 'en' }
  ];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientProviders locale={locale} messages={messages}>
            {children}
          </ClientProviders>
        </Suspense>
      </body>
    </html>
  );
}
