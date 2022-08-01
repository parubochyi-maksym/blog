import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategories">
          {post.categories.map((c) => (
            <span className="postCategory" key={post._id}>
              {c.name}
            </span>
          ))}
        </div>
        <div className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitleText">{post.title}</span>
          </Link>
        </div>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <div className="postDescription">
        <p className="postDescriptionText">{post.desc}</p>
      </div>
    </div>
  );
}
