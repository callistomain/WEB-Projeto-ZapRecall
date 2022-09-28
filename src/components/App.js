import { useState } from "react";
import Home from "./Home";
import Session from './Session';

// JS
const decks = [];
createDeck("React",
  {front: "O que é JSX?", back: "Uma extensão de linguagem do JavaScript"},
  {front: "O React é __", back: "uma biblioteca JavaScript para construção de interfaces"},
  {front: "Componentes devem iniciar com __", back: "letra maiúscula"},
  {front: "Podemos colocar __ dentro do JSX", back: "expressões"},
  {front: "O ReactDOM nos ajuda __", back: "interagindo com a DOM para colocar componentes React na mesma"},
  {front: "Usamos o npm para __", back: "gerenciar os pacotes necessários e suas dependências"},
  {front: "Usamos props para __", back: "passar diferentes informações para componentes "},
  {front: "Usamos estado (state) para __", back: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
)

let deck, zaps;

// REACT
export default function App() {
  // States
  const [currentState, setCurrentState] = useState("home");

  // Functions
  function startApp(deckIndex, zapsGoal) {
    [deck, zaps] = [deckIndex, zapsGoal];
    setCurrentState("session");
  }

  // Return JSX
  return (
    <>
      {currentState === "home" && <Home decks={decks} startApp={startApp}/>}
      {currentState === "session" && <Session deck={decks[deck].cards} zaps={zaps}/>}
    </>
  );
}

function createDeck(name, ...cards) {
  const deck = {name: name, cards: cards};
  decks.push(deck);
}

/*
function createCard(front, back) {
  return {front: front, back: back};
}
*/
