import React from "react";
import { ImCreditCard } from "react-icons/im";
import { ImQrcode } from "react-icons/im";
import { ImCoinDollar } from "react-icons/im";
import { ImBarcode } from "react-icons/im";

const Pagamento = () => {
  return (
    <div className="webFooter containerFooter">
      <h3>Pagamento</h3>
      <li>
        <ImCreditCard/> Visa
      </li>
      <li><ImCreditCard/> Mastercard
      </li>
      <li><ImQrcode/> Pix
      </li>
      <li> <ImBarcode/> Boleto
      </li>
      <li><ImCoinDollar/> Crypto
      </li>
    </div>
  );
};

export default Pagamento;
