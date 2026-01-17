/*
 * @Author: zuo
 * @Date: 2026-01-13 13:26:22
 */
export default function MiniLayout({children}: {children: React.ReactNode}) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12 }}>
      <h2 style={{ marginBottom: 8 }}>局部布局</h2>
      {children}
    </div>
  )
}