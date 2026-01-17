/*
 * @Author: zuo
 * @Date: 2026-01-16 12:28:43
 */
import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag');
  if(tag) {
    revalidateTag(tag, {expire: 0});
    return NextResponse.json({revalidate: true, now: Date.now()})
  }
  return NextResponse.json({ revalidated: false, now: Date.now() });
}