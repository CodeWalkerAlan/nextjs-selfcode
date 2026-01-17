import React from 'react'
import MiniLayout from '../components/MiniLayout'

function LayoutDemo() {
  return <div>这是被局部布局包裹的页面</div>
}

LayoutDemo.getLayout = (page: React.ReactElement) => (
  <MiniLayout>{page}</MiniLayout>
)

export default LayoutDemo;