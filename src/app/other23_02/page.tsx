//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app/src/app/other23_02/page.tsx
//▼リスト6-8B
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use client'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';//Added.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function Search(){
  const params = useSearchParams()
  return (
    <div>
      <h1 className='title'>● Other23_02 (Based on リスト6-8, by App router)</h1>
      <div>
        <a href='/page23'>▶ Go back to top page23!</a>
      </div>
      <p className='msg'>
      ■ フォームが送信・受信されました。
      以下のデータを削除しました。
      </p>
      <ol>
        <li className='msg'>Id: {params.get('id')}</li>
      </ol>
    </div>
  );
}
//**********************************************************************
function Other(){
  return (
    <>
      <Suspense>
        <Search />
      </Suspense>
    </>
  )
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Other
