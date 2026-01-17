/*
 * @Author: zuo
 * @Date: 2026-01-17 11:21:40
 */
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['zh', 'en', 'jp'],
  defaultLocale: 'zh',
  localePrefix: 'always'
});