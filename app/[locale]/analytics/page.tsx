/*
 * @Author: zuo
 * @Date: 2026-01-16 13:16:16
 */
// 📄 文件路径：app/analytics/page.tsx
import { Suspense } from 'react';
import GlobalStats from './components/GlobalStats';

const userVisits = Math.floor(Math.random() * 100);
export default async function AnalyticsPage() {
  // 模拟用户个性化数据 (动态，不缓存)


  return (
    <div className="p-8 max-w-2xl mx-auto">
      {/* 1. 动态内容：瞬间显示 */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm bg-white">
        <h2 className="text-lg font-semibold text-gray-700">Your Activity</h2>
        <div className="text-4xl font-bold text-gray-900 my-2">{userVisits}</div>
      </div>

      {/* 2. 静态/缓存内容：流式加载 */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Global Platform Stats</h2>
        <Suspense fallback={<div>Loading Market Data...</div>}>
          <GlobalStats />
        </Suspense>
      </div>
    </div>
  );
}