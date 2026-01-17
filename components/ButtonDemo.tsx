/*
 * @Author: zuo
 * @Date: 2026-01-15 12:29:38
 */
import { Button } from "@/components/ui/button"
import { Mail, Trash2 } from "lucide-react"

export default function ButtonDemo() {
  return (
    <div className="space-x-4">
      {/* 基础按钮 */}
      <Button>Click me</Button>
      
      {/* 带图标的按钮 - 使用 variant 属性 */}
      <Button variant="secondary">
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>
    </div>
  )
}