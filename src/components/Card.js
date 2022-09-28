import styled from "styled-components";
import playImg from "../assets/img/play-outline-icon.svg";
import rightImg from "../assets/img/icone_certo.png";
import doubtImg from "../assets/img/icone_quase.png";
import wrongImg from "../assets/img/icone_erro.png";
import turnImg from "../assets/img/seta_virar.png";
import { useState } from 'react';

export default function Card(props) {
  const [answer, setAnswer] = useState();
  const [side, setSide] = useState(true);
  const [icon, setIcon] = useState(playImg);

  function answerDeselect(answer, img) {
    setAnswer(answer);
    setIcon(img);
    props.setSelected(null);
    props.addAnswer(props.index, img);
  }

  if (!props.isSelected) {
    return (
      <Flashcard onClick={() => props.setSelected(props.index)} className={answer}>
          <div>Pergunta {props.index + 1}</div>
          <img src={icon} alt="" className={answer}/>
      </Flashcard>
    );
  } else {
    return (
      <Open>
          <div className="text">{side ? props.front : props.back}</div>
          {side || answer
            ? <img onClick={() => setSide(!side)} src={turnImg} alt="" />
            : <Buttons answerDeselect={answerDeselect}/>
          }
      </Open>
    );
  }
}

function Buttons({answerDeselect}) {
  return (
    <StyledButtons>
      <div className="erro" onClick={() => answerDeselect("erro", wrongImg)}>Não lembrei</div>
      <div className="duvida" onClick={() => answerDeselect("duvida", doubtImg)}>Quase não lembrei</div>
      <div className="acerto" onClick={() => answerDeselect("acerto", rightImg)}>Zap!</div>
    </StyledButtons>
  );
}

const StyledButtons = styled.div`
  display: flex;
  color: white;
  gap: 12px;
  
  & > * {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    padding: 0 10px;
    background-color: black;
    width: 85px;
    height: 37px;
    border-radius: 5px;
  }

  .erro {
    background-color: var(--cor-nao-lembrei);
  }

  .duvida {
    background-color: var(--cor-quase-nao-lembrei);
  }

  .acerto {
    background-color: var(--cor-zap);
  }
`;

const Flashcard = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin: 16px 0px;
  padding: 16px;
  cursor: pointer;
  font-family: 'Recursive', cursive;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: bold;

  img {
    width: 23px;
    height: 23px;
  }

  &.erro {
    color: var(--cor-nao-lembrei);
    text-decoration: line-through;
  }

  &.duvida {
    color: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
  }

  &.acerto {
    color: var(--cor-zap);
    text-decoration: line-through;
  }
`;

const Open = styled(Flashcard)`
  height: fit-content;
  min-height: 130px;
  flex-direction: column;
  background-color: var(--cor-fundo-card);
  gap: 12px;
  cursor: default;
  
  .text {
    align-self: flex-start;
    font-size: 18px;
    font-weight: normal;
    width: 100%;
  }

  img {
    align-self: flex-end;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }
`;
