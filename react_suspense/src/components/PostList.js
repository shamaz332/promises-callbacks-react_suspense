import React from "react"

export default function PostList({ resource }) {
  const posts = resource.read()

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>{post.first_name}</li>
      ))}
    </ul>
  )
}