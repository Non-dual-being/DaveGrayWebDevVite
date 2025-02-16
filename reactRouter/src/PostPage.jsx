import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

const PostPage = ({ posts, handeDelete }) => {
  const { id } = useParams(); /**deconstrueert uit de url de id (/posts/:id) */
  const post = posts.find(post => post.id.toString() === id)

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button 
              onClick={(e) => handeDelete(post.id)}
            >Smetterling</button>
          
          </>
        
        }
      </article>
    
    </main>
  )
}

export default PostPage