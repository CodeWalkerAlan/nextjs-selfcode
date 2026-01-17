import { get } from 'http';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = Record<string, unknown>;

type CartStore = {
  items: CartItem[],
  count: number,
  addItem: (product: CartItem) => void,
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(persist((set, get)=> {
  return {
    items: [],
    count: 0,
    addItem: (product: CartItem) => set(state => ({
      items: [...state.items, product],
      count: state.count + 1
    })),
    clearCart: () => set({items: [], count: 0}),
    
  }
},{
    name: 'cart-storage', // localStorage key
}))