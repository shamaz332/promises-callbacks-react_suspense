import React, { Suspense } from "react"
import PostList from "./components/PostList"
import createResource from "./components/Resourse"

const resource = createResource()

export default function App() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <PostList resource={resource} />
      </Suspense>
    </div>
  )
}