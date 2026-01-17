/*
 * @Author: zuo
 * @Date: 2026-01-17 17:23:42
 */
// components/InpPanelOptimized.tsx
'use client';

import {useMemo, useState, useTransition} from 'react';

type Item = {id: number; text: string};

function buildData(total: number): Item[] {
  return Array.from({length: total}, (_, id) => ({
    id,
    text: `Item ${id} - ${'react concurrent rendering '.repeat(4)}`
  }));
}

export default function InpPanelOptimized() {
  const [isPending, startTransition] = useTransition();
  const data = useMemo(() => buildData(80000), []);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(8000);
  const [clicks, setClicks] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((item) => item.text.toLowerCase().includes(q));
  }, [data, query]);

  return (
    <section style={{marginTop: 24, padding: 16, border: '1px solid #eee', borderRadius: 12}}>
      <h2 style={{fontSize: 20}}>INP 对比：optimized</h2>
      <p style={{opacity: 0.8}}>
        输入框是紧急更新；过滤与渲染列表是过渡更新。输入更跟手，列表允许“慢一点”。
      </p>

      <div style={{display: 'flex', gap: 12, alignItems: 'center', marginTop: 12}}>
        <button
          type="button"
          onClick={() => setClicks((c) => c + 1)}
          style={{padding: '8px 12px', borderRadius: 8, border: '1px solid #ddd'}}
        >
          点击计数：{clicks}
        </button>
        <input
          value={input}
          onChange={(e) => {
            const next = e.target.value;
            setInput(next);
            startTransition(() => setQuery(next));
          }}
          placeholder="快速输入，观察是否更顺…"
          style={{flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #ddd'}}
        />
      </div>

      <div style={{display: 'flex', gap: 12, alignItems: 'center', marginTop: 12}}>
        <span style={{width: 120, fontSize: 12, opacity: 0.7}}>渲染上限：{limit}</span>
        <input
          type="range"
          min={1000}
          max={20000}
          step={1000}
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{flex: 1}}
        />
      </div>

      <div style={{marginTop: 12, fontSize: 12, opacity: 0.7}}>
        {isPending ? '处理中…' : '就绪'} / total: {data.length} / rendered: {Math.min(filtered.length, limit)} / query: {query}
      </div>

      <div style={{marginTop: 12, height: 260, overflow: 'auto', border: '1px solid #eee', borderRadius: 8}}>
        {filtered.slice(0, limit).map((item) => (
          <div key={item.id} style={{padding: '6px 10px', borderBottom: '1px solid #f3f3f3'}}>
            {item.text}
          </div>
        ))}
      </div>
    </section>
  );
}