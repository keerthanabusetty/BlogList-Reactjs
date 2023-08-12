// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blog} = props
  return (
    <li className="blog-item">
      <div className="blog-item-header">
        <h1>{blog.title}</h1>
        <p className="blog-published-date">{blog.publishedDate}</p>
      </div>
      <div className="blog-item-description">
        <p>{blog.description}</p>
      </div>
    </li>
  )
}

export default BlogItem
