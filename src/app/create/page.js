"use client"
import { Router, useRouter } from 'next/navigation'
import React from 'react'

function Create() {
  const router = useRouter()
  return (
    <form onSubmit={(e)=>{
      debugger;
      e.preventDefault()//onsubmit실행시 기본동작을 막음(새로고침)
      const title = e.target.title.value
      const body = e.target.body.value
      const options = {
        method:"POST",
        headers:{
          'Content-type':'application/json',
        },
        body:JSON.stringify({title,body})
      }
      fetch(`http://localhost:9000/topics`, options)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        //서버컴포넌트에서 새로운 데이터를 가져오게함(단, 목록API는 캐시저장하지않은 상태)
        router.refresh()
        //redirect
        router.push(`/read/${result.id}`)
      })
    }}>
      <p>
        <input type="text"
        name="title"
        placeholder="title"
        ></input>
      </p>
      <p>
        <textarea
        name="body"
        placeholder="body"
        ></textarea>
      </p>
      <p>
        <input type="submit" ></input>
      </p>
    </form>
  )
}

export default Create