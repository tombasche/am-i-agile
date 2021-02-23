import React from 'react';
import { QuestionsAsked } from './Answer';

export const AnswersGiven = ({ questions }: { questions: QuestionsAsked }) => {
  return (
    <div style={listContainer}>
      <h5>What should I improve on?</h5>
      <ul style={list}>
        {Object.values(questions).map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
};

const listContainer = {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
};

const list = {
  fontSize: '24px',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'start',
};
