//堀:▼リスト6-6B
//~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app/src/app/page23/page.tsx
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
'use server'
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
import { serverAction0, serverAction1, serverAction2, serverAction3, serverAction4} 
from './server-action';
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
async function Home(){//<1
  //======================================================================
  return (
    <main>
      <h1 className='title'>● Page23：mydb/mydata の管理 (based on リスト6-6, by App router)</h1><br/>
      {/*======================================================================*/}
        <form className='form' action={serverAction0}>
          <span className='msg'>■ レコードの一覧表示：</span>
          <button className='btn'>▶ Click for listing</button>
        </form>
      {/*======================================================================*/}
      <p className='msg'>■ 表示のため, 数字 id を入力下さい．</p>
      <div>
        <form className='form' action={serverAction3}>
          <p className='msg'>
            id：<input className='input' type='number' name='input'/>
            <button className='btn'>▶ Click for showing</button>
          </p>
        </form>
      </div>
      {/*======================================================================*/}
      <p className='msg'>■ 表示のため, 名前の部分文字列を入力下さい．</p>
      <div>
        <form className='form' action={serverAction4}>
          <p className='msg'>
            name-part：<input className='input' type='text' name='namepart'/>
            <button className='btn'>▶ Click for showing</button>
          </p>
        </form>
      </div>
      {/*======================================================================*/}
      <p className='msg'>■ 追加のため，データを入力下さい．</p>
      <div>
        <form className='form' action={serverAction1}>
          <p className='msg'>
            id：<input className='input' type='number' name='id'/>
            <button className='btn'>▶ Click for insertion</button>
          </p>
          <p className='msg'>name：<input className='input' type='text' name='name'/></p>
          <p className='msg'>mail：<input className='input' type='text' name='mail'/></p>
          <p className='msg'>age：<input className='input' type='number' name='age'/></p>
        </form>
      </div>
      {/*======================================================================*/}
      <p className='msg'>■ 削除のため，数字 id を入力下さい．</p>
      <div>
        <form className='form' action={serverAction2}>
          <p className='msg'>
            id：<input className='input' type='number' name='input'/>
            <button className='btn'>▶ Click for deletion</button>
          </p>
        </form>
      </div>
    </main>
  );
  //======================================================================
}//1>
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export default Home;
