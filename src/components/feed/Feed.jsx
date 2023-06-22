//import Post from "../post/Post"
import "./feed.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Create from "../create/Create"
import Post1 from "../post1/Post1"
import Delete from "../delete/Delete"

export default function Feed() {
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
    <div className="feed">
      <Create/>
      <Delete/>
      <div className="feedTitle">
        Cluster
      </div>
      {posts.map((p)=> (
        <Post1 key={p.id} post={p} />
      ))}
    </div>
  )
}
