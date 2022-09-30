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

createDeck("Harry Potter",
  {front: "Como é feita a seleção dos novos alunos para suas respectivas casas?", back: "Pelo chapéu seletor"},
  {front: "Qual é o nome daquele que não deve ser nomeado?", back: "Voldemort"},
  {front: "Quantos filmes tem a franquia de Harry Potter?", back: "8 Filmes"},
  {front: "Quantas Horcruxes existem?", back: "7"},
  {front: "Qual gêmeo morre na segunda guerra bruxa?", back: "Fred"},
  {front: "Qual é o padrinho do Harry Potter?", back: "Sirius Black"},
  {front: "Qual grupo Harry Potter criou no 5° livro da saga?", back: "Armada de Dumbbledore"},
  {front: "Quem substituiu o Harry na posição de apanhador?", back: "Gina Weasley"},
  {front: "Qual poção transfigurava pessoas", back: "Poção Polisuco"},
  {front: "Qual animal aparece para aqueles que já viram a morte", back: "Testrálios"},
  {front: "Quem matou Sirius Black?", back: "Bellatrix Lestrange"},
  {front: "O que deve ser dito ao usar/ao fechar o Mapa do Maroto?", back: '"Juro solenemente que não farei o bem" e "Malfeito feito"'}
)

createDeck("League of Legends",
  {front: "Quem é o irmão do Yasuo?", back: "Yone"},
  {front: "Jinx e de Quê? ", back: " de Jinx"},
  {front: "Qual é o campeão mais novo do Lol ?", back: "Nilah"},
  {front: "Qual é a posição menos escolhida no Lol ?", back: "Suporte"},
  {front: "Quais São os Dragões que aparecem no LOL ?", back: "Infernal,Nuvens,Hextech,Oceano e Montanha"},
  {front: "Quando o Adc e o Suporte ajudam o jungle a farmar , qual o nome da ação?", back: "Leash"},
  {front: "O que significa ARAM?", back: "All Random All mid "},
  {front: "Quantos Campeões tem no Lol?", back: "161"}
)

createDeck("Pokemon",
  {front: "Qual é a evolução do pikachu?", back: "Raichu"},
  {front: "Quantos pokémons conseguem mega-evoluir para X e Y?", back: "Charizard e Mewtwo"},
  {front: "Quais são os iniciais da 1° Gen?", back: "Charmander, Squirtle e Bulbasaur"},
  {front: "Qual o rival do Ash na região de Kanto?", back: "Gary Carvalho"},
  {front: "Qual pokémon tinha uma gangue?", back: "Squirtle"},
  {front: "Quantas eeveelutions existem?", back: "8"},
  {front: "Qual pokémon o Ash encontrou em uma pedra, em um dia chuvoso?", back: "Charmander"},
  {front: "Quem é considerado o deus pokémon?", back: "Arceus"}
)

createDeck("Mitologia Grega",
  {front: "Qual foi a punição que Hércules recebeu por assasinar a própria esposa?", back: "Realizar 12 difíceis"},
  {front: "Quem decifrou o enigma da esfinge?", back: "Édipo"},
  {front: "Quem decapitou a Medusa?", back: "Perseu, filho de Zeus"},
  {front: "Qual é o deus do Sol?", back: "Apolo"},
  {front: "Qual é o deus do prazer?", back: "Dionísio"},
  {front: "Qual é a deusa da beleza e do amor?", back: "Afrodite"},
  {front: "Qual é o deus do submundo?", back: "Hades"},
  {front: "Qual é o deus do deuses?", back: "Zeus"},
  {front: "Bônus: Quem deitou o Zeus na porrada", back: "Kratos, O bom de guerra!"}
)

createDeck("Percy Jackson",
  {front: "Quem é o pai do Percy Jackson?", back: "Poseidon"},
  {front: "O que é roubado no primeiro livro?", back: "O raio de Zeus"},
  {front: "Em o mar de monstros quem é o meio-irmao de Percy?", back: "Um ciclope"},
  {front: "Qual objeto mágico a mãe da Anabeth deu pra ela?", back: "Um boné de invisibilidade dos Yankees"},
  {front: "Como Bianca di Angelo morre?", back: "Num dos ferros velhos de Hefesto"},
  {front: "Quem o velocino de ouro cura no pinheiro?", back: "Thália, filha de Zeus."},
  {front: "Quem troca Percy e Jason de acampamento ao tirar as memórias deles?", back: "Hera"},
  {front: "Qual o nome da espada do Percy?", back: "Anaklusmos"}
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
