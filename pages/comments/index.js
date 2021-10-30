import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'

export default function CommentLists() {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    
    
    const fetchingComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }


    const submitComments = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        setComment('')
    }
    

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        console.log(data)
        fetchingComments()
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>J!kMUNN - all comments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <h1>@ll comments are here!</h1>
          
          {
              comments.map((comment) => {
                  return (
                      <div style={{display: 'flexbox', justifyContent: 'center', alignItems: 'center', padding: 10, margin: 25, width: 250, backgroundColor: 'black', color: 'whitesmoke'}} key={comment.id}>
                          <h5> {comment.id} {comment.text} </h5>
                          <button onClick={() => deleteComment(comment.id)}>Delete</button>
                      </div>
                  )
              })
          }
          <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" />
          <button onClick={submitComments}>Submit</button>
          <button onClick={fetchingComments}>Load Comments</button>
    </div>
  )
}
