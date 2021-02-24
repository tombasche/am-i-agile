import CSS from 'csstype';

import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Confetti from 'react-dom-confetti';

import { Button } from './Button';
import { Verdict } from './Verdict';
import { Answer, QuestionsAsked } from './Answer';

function all<T extends {}>(f: T): boolean {
  return Object.values(f).every((b) => b);
}

const questionsAsked: QuestionsAsked = {
  1: 'Do I talk to the customer daily or weekly?',
  2: 'Do I deliver value to the customer daily or weekly?',
  3: 'Do I regularly get together with the team and find ways to improve value and the flow of work?',
  4: 'Do I welcome changing requirements?',
  5: 'Is the team self-organised? Is there a culture of trust?',
  6: 'Do I value face-to-face conversations over contract negotiations?',
};

const done =
  Math.max(...Object.keys(questionsAsked).map((e) => parseInt(`${e}`))) + 1;

export const Questions = () => {
  const [answer, setAnswer] = useState<Answer>({});
  const [verdict, setVerdict] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [triggerConfetti, setTriggerConfetti] = useState(false);
  const [results, setResults] = useState({});

  React.useEffect(() => {
    if (currentQuestion === done) {
      setTriggerConfetti(all(answer));
      setVerdict(all(answer));
      const reducer = (acc: string[], item: boolean, idx: number) => {
        if (!item) acc.push(questionsAsked[idx + 1]);
        return acc;
      };
      const results = Object.values(answer).reduce(reducer, []);
      setResults(results);
    }
  }, [currentQuestion, answer]);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <div>
      {currentQuestion !== done && (
        <div style={questionStyle}>
          <h3>{questionsAsked[currentQuestion]}</h3>
          <div
            style={
              isTabletOrMobile
                ? groupPickerMobileStyle
                : groupPickerContainerStyle
            }
          >
            <Button
              handleClick={() => {
                setAnswer({ ...answer, [currentQuestion]: true });
                setCurrentQuestion(currentQuestion + 1);
              }}
            >
              Yes
            </Button>
            <Button
              handleClick={() => {
                setAnswer({ ...answer, [currentQuestion]: false });
                setCurrentQuestion(currentQuestion + 1);
              }}
            >
              No
            </Button>
            <Button
              handleClick={() => {
                setAnswer({ ...answer, [currentQuestion]: false });
                setCurrentQuestion(currentQuestion + 1);
              }}
            >
              I don't know
            </Button>
          </div>
        </div>
      )}

      <div style={confettiContainerStyle}>
        <Confetti active={triggerConfetti} config={confettiConfig} />
        {currentQuestion === done && (
          <div style={verdictStyle}>
            <Verdict verdict={verdict} questions={results} />
            <button
              style={resetButton}
              onClick={() => {
                setAnswer({});
                setVerdict(false);
                setCurrentQuestion(1);
                setResults([]);
              }}
            >
              Reset
            </button>
          </div>
        )}
        <Confetti active={triggerConfetti} config={confettiConfig} />
      </div>
    </div>
  );
};

const groupPickerMobileStyle: CSS.Properties = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
};

const groupPickerContainerStyle: CSS.Properties = {
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
};

const verdictStyle: CSS.Properties = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
};

const resetButton: CSS.Properties = {
  backgroundColor: '#008CBA',
  border: 'none',
  color: 'white',
  padding: '8px 16px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  maxWidth: '10em',
  margin: '15px',
};

const confettiContainerStyle: CSS.Properties = {
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
};

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 12000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const questionStyle = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
};
