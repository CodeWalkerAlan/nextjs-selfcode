/*
 * @Author: zuo
 * @Date: 2026-01-17 18:17:29
 */
'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';



export function ClientProviders({
  children,
  locale,
  messages
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, unknown>;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
