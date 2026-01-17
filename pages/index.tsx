import Link from "next/link"
import { useRouter } from "next/router";

/*
 * @Author: zuo
 * @Date: 2026-01-13 11:21:33
 */
export default function Home() {
  const ids = ["hello-world", "like"];
  const router = useRouter();
  const linkRandom = () => {
    const id = ids[Math.floor(Math.random() * ids.length)];
    router.push("/post/" + id);
  }
  return(
    <main>
      <h1 className="text-3xl font-bold mb-4">首页</h1>
      <div className="gap-2 flex flex-col">
        <Link className="text-blue-600 hover:underline" href="/post/hello-world">hello-world</Link>
        <Link className="text-blue-600 hover:underline" href="/post/like">like</Link>
      </div>
      <button className="bg-blue-500 p-2 text-white rounded-md w-fit" onClick={linkRandom}>随机跳转</button>
    </main>
  )
}