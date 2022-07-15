import "./post.css";

export default function Post({ post }) {
  return (
    <div className='post'>
      <img
        className="postImg"
        src="https://images.pexels.com/photos/10757870/pexels-photo-10757870.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          {post.title}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis aliquet ante ut lobortis. Pellentesque habitant morbi tristique senectus et.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis aliquet ante ut lobortis. Pellentesque habitant morbi tristique senectus et.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis aliquet ante ut lobortis. Pellentesque habitant morbi tristique senectus et.
      </p>
    </div>
  )
}
