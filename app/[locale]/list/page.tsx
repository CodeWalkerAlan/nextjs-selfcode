/*
 * @Author: zuo
 * @Date: 2026-01-12 10:28:12
 */
'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function List() {
  const router = useRouter();
  const goToRandomPost = () => {
    const num = Math.floor(Math.random() * 1000);
    router.push(`/list/post-${num}`);
  };





  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">首页</h1>
      <div className="flex flex-col gap-2">
        <Link href="/list/littlestar">
          查看文章:littlestar
        </Link>
        <Link href="/list/friends">
          查看文章:friends
        </Link>
        <button className="bg-blue-500 text-white p-2 rounded-md mt-4 w-fit" onClick={goToRandomPost}>随机跳转</button>
      </div>
    </main>
  )
}