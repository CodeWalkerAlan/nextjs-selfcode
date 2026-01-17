/*
 * @Author: zuo
 * @Date: 2026-01-13 12:10:02
 */
import { useRouter } from "next/router"

// export default function PostDetail() {
//   const { query } = useRouter();
//   const slug = query.slug as string;
//   return(
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-2">当前文章是: { slug }</h1>
//     </div>
//   )
// }

export default function DocsCatchAll() {
  const {query} = useRouter();
  const segments = ( query.slug as string[] ) || []
  return(
    <div>
      <h1 className="text-xl font-bold mb-2">当前文章是: { segments.join('/') || "根目录" }</h1>
    </div>
  )
}