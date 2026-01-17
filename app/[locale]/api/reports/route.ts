/*
 * @Author: zuo
 * @Date: 2026-01-16 15:41:36
 */
// 📄 文件路径：app/api/reports/route.ts
import { NextResponse } from 'next/server';


export async function GET() {
  // 1. 准备数据
  const csvContent = "ID,Content\n1,Hello\n2,World";
  
  // 2. 返回响应，重点在于设置正确的 Content-Type 和 Content-Disposition
  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="report.csv"',
    },
  });
}