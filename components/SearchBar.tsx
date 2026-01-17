/*
 * @Author: zuo
 * @Date: 2026-01-14 14:52:46
 */
'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams?.toString());
    if(term) {
      params.set('query', term);
    }else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

  }, 300)
  return(
    <div>
      <input 
        defaultValue={searchParams?.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="border p-2 rounded"
        placeholder="搜索..."
      />
    </div>
  )
}