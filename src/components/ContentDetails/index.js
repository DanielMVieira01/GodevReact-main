import "./styles.css";
import { useParams } from "react-router-dom";
import { getPost } from "../Content/posts";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

export default function ContentDetails() {
  let params = useParams();
  let post = getPost(parseInt(params.Id, 10));
  const [contador, setContador] = useState(0);
  const parToHeader = () => {
    setContador(contador +1);
  }
  return (
    <div>
      <nav>
        <Header parToHeader={contador}/>
      </nav>
      <div id="containerD">
        <div id="imageSection">
          <img src={post.preview} alt="" />
        </div>
        <div id="productDetails">
          <div id="details">
            <h1>{post.name}</h1>
            <h4>R$: {post.price}</h4>
          </div>
          <h3>Description</h3>
          <h4>{post.description}</h4>
          <div class="productPreview">
            <h3>Product preview</h3>
            {post.photos.map((fotos) => {
              return <img src={fotos} alt="" />;
            })}
          </div>
          <h3>Size</h3>

          <div class="size">
            {post.size.map((tamanho) => {
              return (
                <div class="sizeBorder">
                  <input type="radio" name="size" VALUE="op" ></input>
                  <p>{tamanho}</p>
                </div>
              );
            })}
          </div>
          <div id="button">
            <button onClick={() => parToHeader()}>Comprar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
