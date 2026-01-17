/*
 * @Author: zuo
 * @Date: 2026-01-17 15:23:57
 */
import type {AbstractIntlMessages} from 'next-intl';

export function pickMessages(
  messages: AbstractIntlMessages,
  namespaces: Array<keyof AbstractIntlMessages | string>
) {
  const picked: AbstractIntlMessages = {};

  for (const ns of namespaces) {
    const value = (messages as AbstractIntlMessages)[ns];
    if (value) (picked as AbstractIntlMessages)[ns] = value;
  }

  return picked;
}