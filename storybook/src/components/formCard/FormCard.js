import React, { useState } from "react";
import Button from "../button/Button";
import InputField from "../inputfield/InputField";
import FormHead from '../utils/FormHead'
import "./formCard.css";

const FormCard = ({}) => {
  const [inputRozao, setinputRozao] = useState("");
  const [inputCnpj, setinputCnpj] = useState("");
  const [inputCep, setinputCep] = useState("");

  return (
    <div className="container">
      <form className="form__card" onSubmit={(e) => e.preventDefault}>
        <FormHead heading='heading'/>
        <div className="wraper">
          <div className="large">
            <InputField
              type= 'text'
              placeholder="rozao social"
              value= {inputRozao}
              onChange={(e) => setinputRozao(e.target.value)}
            />
          </div>

          <div className="medium"> 
            <InputField
              type= 'text'
              placeholder="cnpj"
              value={inputCnpj}
              onChange={(e) => setinputCnpj(e.target.value)}
            />
          </div>
          <div className="small">
            <InputField
              type='text'
              placeholder="cep"
              value={inputCep}
              onChange={(e) => setinputCep(e.target.value)}
            />
          </div>
        </div>

        <Button children="Enviar" onClick={() => {}} />
      </form>

      <div className="container"></div>
    </div>
  );
};

export default FormCard;
