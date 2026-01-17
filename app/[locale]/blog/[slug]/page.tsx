/*
 * @Author: zuo
 * @Date: 2026-01-16 11:10:06
 */
// 📄 文件路径：app/blog/[slug]/page.tsx
// 定义参数类型
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. 模拟数据获取函数
async function getPost(slug: string) {
  console.log(`[Server] Fetching post: ${slug} at ${new Date().toISOString()}`);
  // 使用真实的公共 API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
    next: {
      tags: ["slug"]
    }
  });
  if (!res) throw new Error('Post not found');
  return res.json();
}

export async function generateStaticParams() {
  console.log('🔥 generateStaticParams 执行了')
  // 获取前 10 篇文档的 ID
  const docs = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  
  // 必须返回一个对象数组，每个对象包含参数 (slug)
  return docs.slice(0, 10).map((doc: {userId: number, id: number, title: string, body: string}) => ({
    slug: doc.id.toString(),
  }));
}

// 2. 页面组件：直接使用 await 获取数据
export default async function BlogPost({ params }: Props) {
  const { slug } = await params; // Next.js 15+: params 是异步的
  const post = await getPost(slug);

  return (
    <article className="prose lg:prose-xl mx-auto mt-10">
      <h1 className="capitalize">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-4">
        发布时间: 2024-01-01 | 生成时间: {new Date().toLocaleTimeString()}
      </div>
      <p>{post.body}</p>
    </article>
  );
}