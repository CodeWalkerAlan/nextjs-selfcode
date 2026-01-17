/*
 * @Author: zuo
 * @Date: 2026-01-17 11:24:51
 */
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from './routing';

export const locales = routing.locales;

export default getRequestConfig(async ({locale = 'zh'}) => {
  if(!locale|| !routing.locales.includes(locale as ("zh" | "en"))) notFound();

  return {
    locale,
    messages: (await import(`../message/${locale}.json`)).default
  }
})