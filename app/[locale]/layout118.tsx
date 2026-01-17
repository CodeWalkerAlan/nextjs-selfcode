/*
 * @Author: zuo
 * @Date: 2026-01-17 18:27:50
 */
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import '../globals.css';
import {pickMessages} from '../../i18n/pick';

export async function generateMetadata({params}: {params: {locale: string}}) {
  const {locale} = await params;

  return {
    alternates: {
      languages: {
        zh: '/zh',
        en: '/en',
        // jp: 'jp'
      }
    },
    title: locale === 'zh' ? '我的博客' : 'My Blog'
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);


  return (
        <NextIntlClientProvider>
              {children}
        </NextIntlClientProvider>
      
  );
}