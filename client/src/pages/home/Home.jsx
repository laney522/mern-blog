import { useEffect, useState, useLocation } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./home.css";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  console.log(location)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")

      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
