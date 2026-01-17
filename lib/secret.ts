/*
 * @Author: zuo
 * @Date: 2026-01-13 18:32:02
 */
import "server-only"

export async function getSecret() {
  return process.env.SECRET_VALUE
}