import React from 'react'

async function Read(props) {
  const resp = await fetch(`http://localhost:9000/topics/${props.params.id}`)
  const topic = await resp.json()
  return (
    <div>
        <h2>{topic.title}</h2>
        {topic.body}
    </div>
  )
}

export default Read