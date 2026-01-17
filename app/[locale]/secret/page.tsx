/*
 * @Author: zuo
 * @Date: 2026-01-13 18:33:00
 */
import { getSecret } from "@/lib/secret" 

export default async function Secret() {
  const ssh = await getSecret();
  return <p>{ssh}</p>
}