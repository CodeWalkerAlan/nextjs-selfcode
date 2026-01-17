/*
 * @Author: zuo
 * @Date: 2026-01-16 15:28:46
 */
// 📄 文件路径：app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'
 
// 使用 Edge Runtime 加速生成，避免 Serverless 冷启动
export const runtime = 'edge' 
 
export default async function Image({ params }: { params: { slug: string } }) {
  const slug = (await params).slug
  
  // ImageResponse 使用 HTML/CSS 语法来绘制图片，非常直观
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Next.js Course: {slug}
      </div>
    ),
    { width: 1200, height: 600 }
  )
}