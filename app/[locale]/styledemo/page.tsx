/*
 * @Author: zuo
 * @Date: 2026-01-15 10:57:21
 */
// components/ProductCard.tsx
import Image from 'next/image';
import CnDemo from "@/components/CnDemo";

// export default function ProductCard() {
//   return (
//     // 1. 卡片容器：圆角、阴影、背景、Hover效果、过渡动画
//     <div className="group max-w-sm rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden border border-gray-100">
      
//       {/* 2. 图片区域：使用 Next.js Image 组件，配合 aspect-video 保持比例 */}
//       <div className="relative aspect-video w-full overflow-hidden">
//         {/* <Image
//           src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4"
//           alt="Coding Setup"
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-110"
//         /> */}
//       </div>

//       {/* 3. 内容区域：Padding 布局 */}
//       <div className="p-5">
//         <div className="flex items-center justify-between">
//           <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
//             热销中
//           </span>
//           <span className="text-sm text-gray-400">3分钟前发布</span>
//         </div>

//         <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//           MacBook Pro M3 Max 深度评测
//         </h3>

//         <p className="mt-2 text-sm text-gray-500 line-clamp-2">
//           这一代 Apple Silicon 芯片带来的性能提升简直令人发指，无论是视频剪辑还是大型代码编译，都能轻松应对...
//         </p>

//         {/* 4. 底部栏：Flex 布局 + 按钮交互 */}
//         <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-8 rounded-full bg-gray-200" />
//             <span className="text-sm font-medium text-gray-700">CodeMaster</span>
//           </div>
          
//           <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 active:scale-95">
//             阅读更多
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// components/ResponsiveBreakpoints.tsx

// export default function ResponsiveBreakpoints() {
//   return (
//     <div className="w-full p-6 rounded-xl text-center text-white font-bold text-2xl transition-colors duration-500
//       bg-red-500
//       sm:bg-orange-500
//       md:bg-yellow-500
//       lg:bg-green-500
//       xl:bg-blue-500
//       2xl:bg-purple-500
//     ">
//       <span className="block sm:hidden">Mobile (Default)</span>
//       <span className="hidden sm:block md:hidden">Small (sm: ≥ 640px)</span>
//       <span className="hidden md:block lg:hidden">Medium (md: ≥ 768px)</span>
//       <span className="hidden lg:block xl:hidden">Large (lg: ≥ 1024px)</span>
//       <span className="hidden xl:block 2xl:hidden">Extra Large (xl: ≥ 1280px)</span>
//       <span className="hidden 2xl:block">2X Large (2xl: ≥ 1536px)</span>
//     </div>
//   )
// }

// export default function ResponsiveGrid() {
//   return (
//     // 手机上 1 列，iPad 上 2 列，桌面端 3 列
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//       <div className="bg-white p-6 shadow rounded-lg">Card 1</div>
//       <div className="bg-white p-6 shadow rounded-lg">Card 2</div>
//       <div className="bg-white p-6 shadow rounded-lg">Card 3</div>
//     </div>
//   )
// }

// export default function ThemeDemo() {
//   return (
//     <div className="dark max-w-md mx-auto rounded-xl bg-white shadow-lg p-6 transition-colors duration-200 dark:bg-slate-800 dark:border dark:border-slate-700">
//       <h3 className="text-lg font-medium text-slate-900 dark:text-white">
//         暗黑模式适配
//       </h3>
//       <p className="mt-2 text-slate-500 dark:text-slate-400">
//         Tailwind 的暗黑模式是基于类的。当父元素（通常是 html 标签）有 `dark` 类名时，
//         所有 `dark:` 前缀的样式都会自动生效。
//       </p>
//       <div className="mt-4">
//         <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/30">
//           Badge
//         </span>
//       </div>
//       <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
//         立即体验
//       </button>
//     </div>
//   )
// }


export default function StyleDemo() {
  return(
    <CnDemo />
  )
}