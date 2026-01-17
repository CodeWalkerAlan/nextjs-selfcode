

/*
 * @Author: zuo
 * @Date: 2026-01-12 10:32:09
 */
const Detail = () => {
    fetch("http://localhost:3000/api/list?name=22", {
        next: {
          revalidate: 8
        }
      }).then(res => res.json()).then(res => {
        console.log(666, res)
      })

  return (
    <div>你好啊</div>
  )
}

export default Detail;