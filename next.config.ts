/*
 * @Author: zuo
 * @Date: 2026-01-12 09:30:43
 */
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
};

export default withNextIntl(nextConfig);
