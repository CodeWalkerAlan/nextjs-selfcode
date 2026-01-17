/*
 * @Author: zuo
 * @Date: 2026-01-16 12:12:50
 */
import { NextRequest, NextResponse } from 'next/server';



export function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('name');
  return NextResponse.json({
    name: tag,
    age: 18,
    timestamp: new Date().toISOString(),
  })
}