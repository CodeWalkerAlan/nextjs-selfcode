/*
 * @Author: zuo
 * @Date: 2026-01-13 18:16:10
 */
'use server'
import { cookies, headers } from "next/headers";

export default async function Info() {

  const h = await headers();
  const lang = h.get("accept-language");
  console.log(lang);
  const cookie = await cookies();
  const token = cookie.get('auth_token');
  console.log(token)
}