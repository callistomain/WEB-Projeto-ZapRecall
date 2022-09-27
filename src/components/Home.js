import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import seta from "../assets/img/seta-dropdown.png";

export default function Home(props) {
  const [selected, setSelected] = useState(false);
  const {decks, startApp} = props;

  function eventHandler(e) {
    const form = e.target.form;
    e.preventDefault();
    const isValid = form.checkValidity();
    if (isValid) startApp(form["decks"].value, form["zaps"].value);
  }

  return (
    <Style>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>

      <form>
        <select name="decks" id="decks" onChange={(e) => setSelected(e.target.options[e.target.selectedIndex])} defaultValue="" required>
          <option value="" disabled hidden>Escolha seu deck</option>
          {decks.map((e, i) => <option key={i} value={i}>{e.name} [{e.cards.length}]</option>)}
        </select>
        {selected &&
          <input type="number" name="zaps" id="zaps" placeholder="Digite sua meta de zaps..." min={0} max={decks[selected.value].cards.length} required/>
        }
        <button onClick={eventHandler}>Iniciar Recall!</button>
      </form>
    </Style>
  );
}

const Style = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  background-color: var(--cor-fundo);

  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  select,
  input {
    font-family: 'Recursive', sans-serif;
    width: 246px;
    height: 43px;
    padding: 0 12px;
    color: #D70900;
    font-size: 14px;
    border-radius: 5px;
    appearance: none;
    outline: none;
    border: none;
  }

  select {
    cursor: pointer;
    background: url(${seta}) white no-repeat calc(100% - 10px) !important;
  }

  select:invalid {
    color: gray;
  }

  option {
    color: #D70900;
  }

  button {
    font-family: 'Recursive', sans-serif;
    width: 246px;
    height: 54px;
    padding: 16px 22px;
    font-size: 18px;
    border-radius: 5px;
    color: #C0C0C0;
    background-color: #E8E8E8;
    border: 1px solid #E8E8E8;
    margin-top: 16px;
  }

  form:valid button {
    color: #D70900;
    background-color: white;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  form:valid button:hover {
    background-color: lightgray;
  }
`;
