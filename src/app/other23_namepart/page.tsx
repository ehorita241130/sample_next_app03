//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app/src/app/other23_namepart/page.tsx
//▼リスト6-2B
/*
record
11|&lt;h1&gt;jiro&lt;&#x2F;h1&gt;|ehorita@blue.ocn.ne.jp|0
cannot be handled.
*/
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use client';
//'use server'//NG. Not compatible with 'next/navigation'.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const dbgFlg1 = true;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';//Added.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function Search(){
  let params = useSearchParams();
  let dataStr = params.get('data');
  if( dbgFlg1 ){
    console.log('-- other23_04/page.tsx:Other()#1:dataStr=\n', dataStr);//Debug
  }
  let data1 = JSON.parse(dataStr);
  if( dbgFlg1 ){
    console.log('-- other23_04/page.tsx:Other()#2:data1=\n', data1);//Debug
    data1.map((item, k) => {
      console.log('-- other23_04/page.tsx:Other()#3:k=${k},item=\n',
                  JSON.stringify(item) );
    })
  }
  //======================================================================
  return (
    <div>
      <h1 className='title'>● Other23_04 (Based on リスト6-2B, by App router)</h1>
      <div>
        <a href='/'>▶ Go back to top!</a>
      </div>
      <p className='msg'>■ data1：</p>
      {data1.map((item, k) => 
          <p className='msg' key={String(k)}>{k+1}：{JSON.stringify(item)}</p>
      )}
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
