import "./styles.css";
import { Link } from "react-router-dom";
import { getPosts } from "./posts";

export default function Content() {
  let posts = getPosts();
  return (
    <div id="mainContainer">
      <div id="containerClothing">
        {posts.map((post) => {
          return (
            <nav>
              <Link  style={{textDecoration: 'none', color:'#000000' }}   key={post.id} to={`/ContentDetails/${post.id}`}>
                <div id="box">
                  <img src={post.preview} alt="" />
                  <div id="details">
                    <h3>{post.name}</h3>
                    <h3>{post.price}</h3>
                  </div>
                </div>
              </Link>
            </nav>
          );
        })}
      </div>
    </div>
  );
}
