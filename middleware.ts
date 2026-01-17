/*
 * @Author: zuo
 * @Date: 2026-01-17 11:42:11
 */
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};