// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const Blogslist = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-container">
      {blogsList.map(eachBlog => (
        <BlogItem blog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}
export default Blogslist
