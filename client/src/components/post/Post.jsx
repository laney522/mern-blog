import "./post.css";
import {Link} from "react-router-dom"

export default function Post({ post }) {
  return (
    <div className='post'>
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
          {/* https://images.pexels.com/photos/10757870/pexels-photo-10757870.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load */}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString}</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  )
}
