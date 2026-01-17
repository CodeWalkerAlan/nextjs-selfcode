/*
 * @Author: zuo
 * @Date: 2026-01-13 17:01:24
 */
export default async function RscDemo() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 },
  })
  const posts = await data.json()
  return(
    <div>
      <ul>
        {
          posts.map((item: {id: number, title: string}) => (
            <li key={item.id}> 
              { item.title }
            </li>
          ))
        }
      </ul>

    </div>
  )
}