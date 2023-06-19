import "./post1.css"

export default function Post1({ post }) {
  return (
    <div className="post">
      <div className="name">
        <div className="postItem">NAME</div>
        <div className="postItem">{post.owner}</div>
      </div>
      <div className="name">
        <div className="postItem">CREATION TIME</div>
        <div className="postItem">{post.ip}</div>
      </div>
      <div className="name">
        <div className="postItem">REPLICAS</div>
        <div className="postItem">{post.desc}</div>
      </div>
      <div className="name">
        <div className="postItem">CLUSTER</div>
        <div className="postItem">{post.name}</div>
      </div>
    </div>
  )
}
