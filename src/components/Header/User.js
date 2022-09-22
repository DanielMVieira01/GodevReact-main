import React from "react";
const User = () => {
  return (
    <div className="user-container">
      <a className="userIcon carrinho" href="">
        <i class="fa-solid fa-cart-shopping addedToCart" id="a1">
          <div className="badge">1</div>
        </i>
      </a>
      <a className="userIcon cadastro" href="">
        Cadastro
      </a>
      <a className="userIcon login" href="">
        Entrar
      </a>
    </div>
  );
};

export default User;
