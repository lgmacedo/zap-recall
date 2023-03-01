import { useState } from "react";
import styled from "styled-components";

import Deck from "./components/Deck";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";

import cards from "./cards.js";

function App() {
  const [recallStart, setRecallStart] = useState(false);
  const [doneCards, setDoneCards] = useState(0);
  const [answers, setAnswers] = useState([]);

  function startRecall() {
    setRecallStart(true);
  }

  function increaseDoneCards(resposta) {
    setDoneCards(doneCards + 1);
    const newAnswers = [...answers, resposta];
    setAnswers(newAnswers);
  }

  return (
    <AppContainer>
      <WelcomePage recallStart={recallStart} startRecall={startRecall}/>
      <Header recallStart={recallStart} />
      <Deck
        recallStart={recallStart}
        cards={cards}
        increaseDoneCards={increaseDoneCards}
      />
      <Footer
        recallStart={recallStart}
        doneCards={doneCards}
        totalCards={cards.length}
        answers={answers}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
