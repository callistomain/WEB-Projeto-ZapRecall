import styled from "styled-components";
import logo from "../assets/img/logo-pequeno.png";
import rightImg from "../assets/img/icone_certo.png";
import partyImg from "../assets/img/party.png";
import sadImg from "../assets/img/sad.png";
import Card from './Card';
import { useState } from 'react';

let hits = 0;
let count = 0;
export default function Session({deck, zaps}) {
  const [selected, setSelected] = useState();
  const [answers, setAnswers] = useState(new Array(deck.length));
  function addAnswer (index, img) {
    const newArr = [...answers];
    newArr[index] = img;
    setAnswers(newArr);
    hits = newArr.reduce((a, b) => b === rightImg ? a+1 : a, 0);
    count++;
  }
  
  return (
    <Style>
      <header>
        <img src={logo} alt="logo" />
        ZapRecall
      </header>
      <main>
        {deck.map((e, i) => <Card setSelected={setSelected} addAnswer={addAnswer} key={i} index={i} front={e.front} back={e.back} isSelected={selected === i}/>)}
      </main>
      <footer>
        <div className="count">
          {count !== deck.length
            ? `${count}/${deck.length} CONCLUÍDOS`
            : (hits >= zaps) ? <div>Parabéns! <img src={partyImg} alt="" /> ({hits}/{zaps})</div> : <div>Putz <img src={sadImg} alt="" /> ({hits}/{zaps})</div>
          }
        </div>
        {count !== 0 &&
          <div className="icons">
            {answers.map((e, i) => e && <img key={i} src={e} alt=""/>)}
          </div>
        }
      </footer>
    </Style>
  );
}

const Style = styled.div`
  header {
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);
  }

  main {
    padding: 80px 0 90px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::-webkit-scrollbar {
      /* display: none; */
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    height: fit-content;
    min-height: 70px;
    padding: 20px;
    font-size: 18px;
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    .count img {
      width: 18px;
      height: auto;
    }
    
    .icons {
      display: flex;
      gap: 6px;
    }

    img {
      width: 23px;
      height: 23px;
    }
  }
`;
