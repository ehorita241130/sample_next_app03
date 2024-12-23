//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app/src/app/other23_create/page.tsx
//▼リスト6-8B
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use client'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';//Added.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function Search(){
  const params = useSearchParams()
  return (
    <div>
      <h1 className='title'>● Other23_01 page (Based on リスト6-8B, by App router)</h1>
      <div>
        <a href='/'>▶ Go back to top!</a>
      </div>
      <p className='msg'>
        ■ フォームが送信されました。
        以下のデータを取得しました。
      </p>
      <ol>
      <li className='msg'>id：{params.get('id')}</li>
      <li className='msg'>name：{params.get('name')}</li>
      <li className='msg'>mail：{params.get('mail')}</li>
      <li className='msg'>age：{params.get('age')}</li>
      </ol>
    </div>
  );
}
//**********************************************************************
function SearchFallback(){
  return (
    <>Placeholder</>
  );
}
//**********************************************************************
function Other(){
  return (
    <>
       <Suspense fallback={<SearchFallback />}>
        <Search />
      </Suspense>
    </>
  )
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Other
