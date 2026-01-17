/*
 * @Author: zuo
 * @Date: 2026-01-16 15:37:24
 */
// 📄 文件路径：app/api/products/[slug]/route.ts
import { NextRequest, NextResponse } from 'next/server';


// ✅ 使用 RouteContext 自动推断
// 注意：'params' 在 Next.js 15+ 是异步的
export async function GET(
  request: NextRequest, 
  context: { params: Promise<{ slug: string }> }
) {
  // context.params 是一个 Promise，需要 await
  // 这里的 slug 类型会自动推断为 string
  const { slug } = await context.params;

  return NextResponse.json({ 
    product: slug,
    price: 99.99
  });
}