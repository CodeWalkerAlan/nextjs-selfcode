/*
 * @Author: zuo
 * @Date: 2026-01-12 09:30:43
 */
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from '@/components/Navbar'
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import type {ReactNode} from 'react';
import '../globals.css';


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
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages({locale});

  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        
      >
         <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class" // 关键：通过给 html 标签加 class="dark" 来切换主题
          defaultTheme="system" // 默认跟随系统
          enableSystem
          disableTransitionOnChange // 避免切换时的闪烁
        >
          <Navbar /> 
           
              {children}
            
          <Toaster />
        </ThemeProvider>
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
