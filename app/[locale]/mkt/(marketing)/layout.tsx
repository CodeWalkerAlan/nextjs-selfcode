/*
 * @Author: zuo
 * @Date: 2026-01-13 15:33:42
 */
import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Link href="/mkt">首页</Link>
      <Link href="/mkt/pricing">定价</Link>
      {children}
    </section>
  );
}
