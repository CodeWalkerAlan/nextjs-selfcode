/*
 * @Author: zuo
 * @Date: 2026-01-12 16:42:02
 */
import React from "react";
import Link from "next/link";

export default function AdminLayout({ children } : { children: React.ReactNode }) {
  return(
    <section className="flex h-screen">
      <nav className="w-64 bg-gray-100 p-4">
        <h2 className="text-lg mb-4 font-bold">管理后台</h2>
        <ul className="flex flex-col gap-2">
          <li className="hover:underline">
            <Link href="/admin/dashboard">仪表盘</Link>
          </li>
          <li className="hover:underline">
            <Link href="/admin/setting">设置</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-8">
        { children }
      </main>
    </section>
  )
}