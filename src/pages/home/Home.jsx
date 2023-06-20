import "./home.css"
import { Link } from 'react-router-dom';
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Post1 from "../../components/post1/Post1";

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    const fetchPosts = async () => {
//    const res = await axios.get("/api/posts/timeline/" + user._id);
    const res = await axios.get("/api/apps/timeline/all/" + "3");  
    setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
    <div className="home">
      <Link className="homelink" to='/cluster'>Go to Clusterpage</Link>
      <div className="hometitle">HomePage</div>
      {posts.map((p)=> (
        <Post1 key={p.id} post={p} />
      ))}
      </div>
    </div>
  )
}
