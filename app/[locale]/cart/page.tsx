'use client'

import React from 'react'
import { useCartStore } from '@/store/cart' // 假设你的 store 文件名叫 cartStore.ts

export default function Cart() {
  const { items, count, addItem, clearCart } = useCartStore();
  return (
    <div>
      <h2 className='font-bold text-xl mb-3'>购物车</h2>
      <p>数量: {count}</p>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>

      {/* 添加商品 */}
      <button className='bg-blue-300 py-3 px-1 rounded-md text-white cursor-pointer mr-2' onClick={() => addItem({ id: 1, name: '苹果', price: 10 })}>
        加入苹果
      </button>
      <button  className='bg-blue-300 py-3 px-1 rounded-md text-white cursor-pointer mr-2' onClick={() => addItem({ id: 2, name: '香蕉', price: 5 })}>
        加入香蕉
      </button>

      {/* 清空购物车 */}
      <button onClick={clearCart}>清空购物车</button>
    </div>
  )
}