/*
 * @Author: zuo
 * @Date: 2026-01-16 11:59:28
 */
// 📄 文件路径：app/news/[id]/page.tsx

type Props = {
  params: Promise<{ id: string }>;
};

async function getNews(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    // 👇 关键修改：设置 revalidate 时间（秒）
    next: { revalidate: 60 } 
  });
  if (!res.ok) throw new Error('News not found');
  return res.json();
}

export async function generateStaticParams() {
  const newsItems = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  return newsItems.slice(0, 10).map((item: {id: number}) => ({
    id: item.id.toString(),
  }));
}

export default async function NewsPage({ params }: Props) {
  const { id } = await params;
  const news = await getNews(id);

  return (
    <div className="prose mx-auto mt-10 p-6 border rounded-lg shadow-sm">
      <div className="mb-4 text-red-600 font-bold uppercase tracking-wider">News (ISR - 60s)</div>
      <h1 className="capitalize">{news.title}</h1>
      <p>{news.body}</p>
      <div className="text-xs text-gray-400 mt-8">
        Last Updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}