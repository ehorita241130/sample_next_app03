//堀:~/pnotes/Shouda_Tsuyano_A1257/P5580/sample_next_app/src/app/page23/server-action.tsx
'use server'
import { redirect } from 'next/navigation';//Added
import sqlite3 from 'sqlite3';//New
import { open } from 'sqlite';//New2
//**********************************************************************
const dbFilePath = './mydb.db';//New.
//**********************************************************************
const dbSpec = {
  filename: dbFilePath,
  driver: sqlite3.Database,
};
//**********************************************************************
//v New2.
async function openDatabase(){
  return open(dbSpec);
}
//**********************************************************************
async function insertData(id, name, mail, age){
  const db = await openDatabase();
  let sql1 = `insert into mydata values(${id}, '${name}', '${mail}', ${age})`;//This is OK.
  const rtn1 = await db.run(sql1);
  return rtn1;
}
//**********************************************************************
export async function serverActReadAll(){
  redirect('/other23_readall');
}
//**********************************************************************
export async function serverActCreate(form){
  let id = form.get('id');
  let name = form.get('name');
  let mail = form.get('mail');
  let age = form.get('age');
  console.log(`-- page23/server-action.tsx:serverActCreate()#1:`+
              `id=${id},name=${name},mail=${mail},age=${age}` );//For tracing.
  let rtn1 = await insertData(id, name, mail, age);
  console.log('-- page23/server-action.tsx:serverActCreate()#2:rtn1=\n', 
              rtn1 );//For tracing.
  let query = `id=${id}&name=${name}&mail=${mail}&age=${age}`;
  let searchParams = new URLSearchParams(query);
  redirect(`/other23_create?${searchParams.toString()}`);
}
//**********************************************************************
async function deleteData(num){
  const db = await openDatabase();
  let sql1 = `delete from mydata where id=${num}`;//This is OK.
  const rtn1 = await db.run(sql1);
  return rtn1;
}
//**********************************************************************
export async function serverActDelete(form){
  let id = form.get('input');
  console.log(`-- id=${id}`);
  let rtn1 = await deleteData(id);
  console.log('-- serverActDelete()#1:rtn1=\n', rtn1);//Debug
  let query = `id=${id}`;
  let searchParams = new URLSearchParams(query);
  redirect(`/other23_delete?${searchParams.toString()}`);
}
//**********************************************************************
async function getData(num){
  const db = await openDatabase();
  let sql1 = `select * from mydata where id=${num}`;//This is OK.
  const data1 = await db.all(sql1);
  return data1;
}
//**********************************************************************
export async function serverActReadSingle(form){//<1
  let num = form.get('input');
  let data1 = await getData(num);
  console.log('-- serverActReadSingle()#1:data1=\n', data1);//Debug
  let data1A = undefined;
  if( data1.length >= 1 ){//<2
    data1A = data1[0];
  }//2>
  else{//<2
    data1A = {id:'-',name:'-',mail:'-',age:0};
  }//2>
  let id = data1A.id;
  let name = data1A.name;
  let mail = data1A.mail;
  let age = data1A.age;
  console.log(`-- serverActReadSingle()#1:id=${id},name=${name},mail=${mail},age=${age}`);
  let query = `id=${id}&name=${name}&mail=${mail}&age=${age}`;
  let searchParams = new URLSearchParams(query);
  redirect(`/other23_readsingle?${searchParams.toString()}`);
}//1>
//**********************************************************************
//**********************************************************************
async function getData4(namepart){
  const db = await openDatabase();
  let sql1 = `select * from mydata where name like '%${namepart}%'`;//This is OK?
  console.log('-- getData4(()#1:sql1=\n', sql1);//Debug
  const data1 = await db.all(sql1);
  return data1;
}
//**********************************************************************
export async function serverActNamepart(form){
  let namepart = form.get('namepart');
  console.log(`-- serverActNamepart()#1:namepart=${namepart}`);//Debug
  let data1 = await getData4(namepart);
  console.log('-- serverActNamepart()#2:data1=\n', data1);//Debug
  let query = `data=${JSON.stringify(data1)}`;
  let searchParams = new URLSearchParams(query);
  redirect(`/other23_namepart?${searchParams.toString()}`);
  //redirect('/other23_namepart');
  //redirect('/other23_readall');
}
//**********************************************************************
