import axios from "axios";
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../context/Context';
import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`posts/${post._id}`, {
        data: { username: user.username }
      });
      window.location.replace("/");
    } catch (err) { }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`posts/${post._id}`, {
         username: user.username, 
         title, 
         desc,
      });

      // window.location.reload();
      setUpdateMode(false)
    } catch (err) { }
  }

  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
          // src="https://images.pexels.com/photos/12576276/pexels-photo-12576276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            alt=""
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className='singlePostTitle' >
            {title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
            Autor:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className='singlePostDescInput'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className='singlePostDesc'>{desc}</p>
        )}
        <button className='singlePostButton' onClick={handleUpdate}>Update</button>
      </div>
    </div>
  )
}
