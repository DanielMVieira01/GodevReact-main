import "./InputText.css";

function InputText({ txt }) {
  return (
    <input type="text" className="input-form" name="login" placeholder={txt} />
  );
}
export default InputText;
